import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <Router>
    <Routes />
  </Router>,
  document.getElementById("root")
);

