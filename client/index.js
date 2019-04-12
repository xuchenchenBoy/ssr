import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import Routes from "./pages"
import store from './store'

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

