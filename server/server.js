import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Routes from "../client/pages";
import Helmet from 'react-helmet'
import logs from '../config/log.config.js'
import config from '../config/webpack.dev.config.js'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

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
  const content = (
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  );

  fs.readFile(path.resolve("./clientBuild/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("出错啦");
    }
    if (context.status === 404) {
      res.status(404);
    }
    const helmet = Helmet.renderStatic(); // 动态配置 header
    return res.send(
      injectHTML(data, {
        title: helmet.title.toString(),
        body: content
      })
    );
  });
});

const injectHTML = (data, { title, body }) => {
  data = data.replace(/<title>.*?<\/title>/g, title)
  data = data.replace(
    '<div id="root"></div>',
    `<div id="root">${renderToString(body)}</div>`
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
