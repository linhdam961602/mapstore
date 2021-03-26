/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import routes from './routes';

import LoadingContainer from 'containers/LoadingContainer';

export default function App() {
  return (
    <LoadingContainer>
      <Suspense fallback={<></>}>
        <Switch>
          {routes.map((route) => (
            <Route
              key={uuid()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </Suspense>
    </LoadingContainer>
  );
}
