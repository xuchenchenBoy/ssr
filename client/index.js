import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Routes from "./pages"
import configureStore from './store'
import rootSagas from './store/rootSagas'
import rootReducers from './store/rootReducers'

const store = configureStore(rootReducers, window.__PRELOADED_STATE__)
store.runSaga(rootSagas)

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
const renderMethod = ReactDOM.render;
renderMethod(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

