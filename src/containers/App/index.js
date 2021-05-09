/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense } from 'react';

import Loading from 'components/LayoutComponent/Loading';
import LoadingContainer from 'containers/LoadingContainer';
import RouteContainer from 'containers/App/components/RouteContainer';
import { NotificationContainer } from 'containers/NotificationContainer';

export default function App() {
  return (
    <LoadingContainer>
      <Suspense fallback={<Loading />}>
        <NotificationContainer />
        <RouteContainer />
      </Suspense>
    </LoadingContainer>
  );
}
