/**
 *
 * PublicRoute
 *
 * This component is the model for all public and restricted routes.
 * The difference between two types is defined if restricted props.
 * restricted = false meaning that route is public; or else, it is restricted.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { MY_PAGE_URI } from 'constants/routes';
import { useAuth } from 'hooks/useAuth';
import MainLayout from 'components/LayoutComponent/MainLayout';

const PublicRoute = ({
  component: Component,
  fluid = true,
  restricted = false,
  ...rest
}) => {
  const { isAuthenticated } = useAuth();

  return fluid ? (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to={MY_PAGE_URI} />
        ) : (
          <Component {...props} />
        )
      }
    />
  ) : (
    <MainLayout>
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated && restricted ? (
            <Redirect to={MY_PAGE_URI} />
          ) : (
            <Component {...props} />
          )
        }
      />
    </MainLayout>
  );
};

export default PublicRoute;
