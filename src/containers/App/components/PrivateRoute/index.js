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

import { LOGIN_URL } from 'constants/routes';

const PrivateRoute = ({ authenticated, component: Component, ...rest }) => (
  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  <Route
    {...rest}
    render={(props) =>
      authenticated ? <Component {...props} /> : <Redirect to={LOGIN_URL} />
    }
  />
);

export default PrivateRoute;
