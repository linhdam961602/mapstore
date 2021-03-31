/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

import * as routes from 'containers/App/routes';

import MainLayout from 'components/LayoutComponent/MainLayout';
import {
  authActions,
  authSliceName,
  initialState,
  authSaga,
} from 'pages/LoginPage/slices';
import history from 'utils/history';
import { HOME_URI, LOGIN_URL } from 'constants/routes';
import { useInjectSaga } from 'hooks/useInjector';

export default function MenuContainer() {
  useInjectSaga({ key: authSliceName, saga: authSaga });

  const location = useLocation();
  const dispatch = useDispatch();
  const { pathname } = location;
  const userInfo = useSelector(
    (state) => get(state, [authSliceName, 'userInfo'], initialState.userInfo),
    shallowEqual,
  );

  useEffect(() => {
    dispatch(authActions.getUserInfo());
  }, [dispatch]);

  useEffect(() => {
    if (isEmpty(userInfo) && pathname === '/') {
      history.push(LOGIN_URL);
    }
  }, [pathname, userInfo, location]);

  const renderMenu = () => {
    if (!isEmpty(userInfo)) {
      return (
        <>
          <MainLayout>
            {routes.layoutRoutes.map((route) => (
              <Route
                key={uuid()}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </MainLayout>
        </>
      );
    }

    return (
      <>
        {routes.routes.map((route) => (
          <Route
            key={uuid()}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </>
    );
  };

  return renderMenu();
}
