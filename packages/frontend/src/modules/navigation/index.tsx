import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { UnauthorizedLayout } from '../layout/unauthorized-layout';
import routeWrapper from './components/route-wrapper';
import { DashboardPage } from '../todo';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route
        component={routeWrapper(DashboardPage, UnauthorizedLayout)}
        path={APP_KEYS.ROUTER_KEYS.ROOT}
      />
    </Switch>
  </Router>
);
