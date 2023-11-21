import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { UnauthorizedLayout } from '../layout';
import routeWrapper from './components/route-wrapper';
import { DashboardPage } from '../todo';
import LoginForm from '../auth/components/forms/login-form.component';
import RegistrationForm from '../auth/components/forms/registration-form.component';
import ResetPasswordForm from '../auth/components/forms/reset-password-form.component';
import ResetPasswordRequestForm from '../auth/components/forms/reset-password-request-form.component';
import { onlyUnauthorizedGuard } from '../auth/features/guards/only-unauthorized-guard';
import { onlyValidJwtInParamsGuard } from '../auth/features/guards/only-valid-jwt-in-params-guard';
import ConfirmationPage from '../auth/views/confirmation.page';

export const MainRouter = () => (
  <Router>
    <Switch>
      <Route
        component={routeWrapper(DashboardPage, UnauthorizedLayout)}
        exact
        path={APP_KEYS.ROUTER_KEYS.ROOT}
      />
      <Route
        component={routeWrapper(onlyUnauthorizedGuard(LoginForm), UnauthorizedLayout)}
        exact
        path={APP_KEYS.ROUTER_KEYS.LOGIN}
      />
      <Route
        component={routeWrapper(onlyUnauthorizedGuard(RegistrationForm), UnauthorizedLayout)}
        exact
        path={APP_KEYS.ROUTER_KEYS.REGISTRATION}
      />
      <Route
        component={routeWrapper(
          onlyValidJwtInParamsGuard(onlyUnauthorizedGuard(ResetPasswordForm)),
          UnauthorizedLayout
        )}
        exact
        path={`${APP_KEYS.ROUTER_KEYS.RESET_PASSWORD}/:token`}
      />
      <Route
        component={routeWrapper(
          onlyUnauthorizedGuard(ResetPasswordRequestForm),
          UnauthorizedLayout
        )}
        exact
        path={APP_KEYS.ROUTER_KEYS.RESET_PASSWORD_REQUEST}
      />
      <Route
        component={routeWrapper(
          onlyValidJwtInParamsGuard(
            onlyUnauthorizedGuard(ConfirmationPage),
            APP_KEYS.ROUTER_KEYS.REGISTRATION
          ),
          UnauthorizedLayout
        )}
        exact
        path={`${APP_KEYS.ROUTER_KEYS.CONFIRMATION}/:token`}
      />
    </Switch>
  </Router>
);
