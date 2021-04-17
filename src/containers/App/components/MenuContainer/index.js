/**
 *
 * MenuContainer
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';

import * as routes from 'containers/App/routes';
import MainLayout from 'components/LayoutComponent/MainLayout';
import { authActions, authSliceName, authSaga } from 'pages/LoginPage/slices';
import { useInjectSaga } from 'hooks/useInjector';
import { useAuth } from 'hooks/useAuth';

export default function MenuContainer() {
  const { isAuthenticated } = useAuth();
  useInjectSaga({ key: authSliceName, saga: authSaga });

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(authActions.getUserInfo());
    }
  }, [dispatch, isAuthenticated]);

  const renderMenu = () => (
    <Switch>
      {routes.fluidRoutes.map((route) => (
        <PublicRoute
          key={uuid()}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <MainLayout>
        {routes.layoutRoutes.map((route) =>
          route.isPrivate || isAuthenticated ? (
            <PrivateRoute
              key={uuid()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ) : (
            <PublicRoute
              key={uuid()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ),
        )}
      </MainLayout>
    </Switch>
  );

  return renderMenu();
}
