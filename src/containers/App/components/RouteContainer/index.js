/**
 *
 * RouteContainer
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';

import * as routes from 'containers/App/routes';
import { authActions, authSliceName, authSaga } from 'pages/LoginPage/slices';
import { useInjectSaga } from 'hooks/useInjector';
import { useAuth } from 'hooks/useAuth';
import NotFoundPage from 'pages/NotFoundPage';

export default function RouteContainer() {
  const { isAuthenticated } = useAuth();
  useInjectSaga({ key: authSliceName, saga: authSaga });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(authActions.getUserInfo());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <Switch>
      {routes.fluidRoutes.map((route) => (
        <PublicRoute
          key={uuid()}
          path={route.path}
          exact={route.exact}
          component={route.component}
          restricted
        />
      ))}
      {routes.layoutRoutes.map((route) =>
        route.isPrivate ? (
          <PrivateRoute
            key={uuid()}
            path={route.path}
            exact={route.exact}
            component={route.component}
            fluid={false}
          />
        ) : (
          <PublicRoute
            key={uuid()}
            path={route.path}
            exact={route.exact}
            component={route.component}
            fluid={false}
          />
        ),
      )}
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
}
