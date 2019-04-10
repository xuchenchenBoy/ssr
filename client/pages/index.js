import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Page404 from './Page404'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route component={Page404} />
    </Switch>
  );
};

export default Routes;
