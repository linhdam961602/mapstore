/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import LoadingContainer from 'containers/LoadingContainer';
import MenuContainer from 'containers/MenuContainer';

export default function App() {
  return (
    <LoadingContainer>
      <Suspense fallback={<></>}>
        <Switch>
          <MenuContainer />
        </Switch>
      </Suspense>
    </LoadingContainer>
  );
}
