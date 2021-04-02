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

import { HOME_URI } from 'constants/routes';

const PublicRoute = ({ authenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? <Redirect to={HOME_URI} /> : <Component {...props} />
    }
  />
);

export default PublicRoute;
