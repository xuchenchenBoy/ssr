import React from "react";
import { Route, Switch } from "react-router";
import Home from "./Home";
import Page404 from './Page404'

const routes = [
  {
    path: '/',
    component: Home,
    loadData: Home.loadData
  },
  {
    path: '/home',
    component: Home,
    loadData: Home.loadData
  },
  {
    component: Page404
  }
]

export default routes;