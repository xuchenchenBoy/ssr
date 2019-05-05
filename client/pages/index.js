import React from "react";
import { Route, Switch } from "react-router";
import routes from './routes.config'
import { renderRoutes } from 'react-router-config';

const Routes = () => {
  return (
    <Switch>
      {
        renderRoutes(routes)
      }
    </Switch>
  );
};

export default Routes;
