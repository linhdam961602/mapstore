/**
 *
 * PrivateRoute
 *
 * This component is the blueprint for all private routes in the application.
 * If the user is logged in, go on and display the component in question;
 * otherwise, redirect the user to sign-in page.
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { HOME_URI } from 'constants/routes';
import { useAuth } from 'hooks/useAuth';
import MainLayout from 'components/LayoutComponent/MainLayout';

const PrivateRoute = ({ component: Component, fluid = true, ...rest }) => {
  const { isAuthenticated } = useAuth();
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    fluid ? (
      <Route
        {...rest}
        render={(props) =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect to={HOME_URI} />
          )
        }
      />
    ) : (
      <MainLayout>
        <Route
          {...rest}
          render={(props) =>
            isAuthenticated ? (
              <Component {...props} />
            ) : (
              <Redirect to={HOME_URI} />
            )
          }
        />{' '}
      </MainLayout>
    )
  );
};

export default PrivateRoute;
