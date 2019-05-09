import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Helmet from 'react-helmet'
import { Provider } from 'react-redux'
import Routes from "../client/pages";
import logs from '../config/log.config.js'
import rootReducers from '../client/store/rootReducers'
// import config from '../config/webpack.dev.config.js'
// import webpack from 'webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'
import configureStore from '../client/store'
import rootSagas from '../client/store/rootSagas'
import { matchRoutes } from 'react-router-config';
import routes from '../client/pages/routes.config'

const PORT = 8090;
const app = express();
// const compiler = webpack(config)

var router = express.Router();
app.use(express.static(
  path.resolve("./clientBuild"), 
  { 
    index: false, // 忽略根目录请求
  }
));

router.get("/*", (req, res) => {
  const context = {};
  const store = configureStore(rootReducers, {})
  store.runSaga(rootSagas)
  const matchingRoutes = matchRoutes(routes, req.url);
  let promises = [];
  matchingRoutes.forEach(({ route }) => {
    if (route.loadData) {
      promises.push(route.loadData(store));
    }
  });

  Promise.all(promises).then(dataArr => {
    const content = (
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Routes />
        </StaticRouter>
      </Provider>
    );
    
    fs.readFile(path.resolve("./clientBuild/index.html"), "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("出错啦");
      }
      if (context.status === 404) {
        res.status(404);
      }
      const preloadedState = store.getState()
      const helmet = Helmet.renderStatic(); // 动态配置 header
      const HTML_DOM = injectHTML(data, {
        title: helmet.title.toString(),
        body: content,
        preloadedState,
      })
      store.close()
      res.send(
        HTML_DOM
        );
    });
  });
});

const injectHTML = (data, { title, body, preloadedState }) => {
  data = data.replace(/<title>.*?<\/title>/g, title)
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">
      ${renderToString(body)}
      <script>
        window.__PRELOADED_STATE__=${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>
    </div>`
  )
  return data;
}

logs(app); // 日志

app.use(router);

// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

// app.use(webpackHotMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
