/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import viVN from 'antd/lib/locale/vi_VN';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import 'moment/locale/vi';

import Loading from 'components/LayoutComponent/Loading';
import LoadingContainer from 'containers/LoadingContainer';
import RouteContainer from 'containers/App/components/RouteContainer';
import { NotificationContainer } from 'containers/NotificationContainer';

export default function App() {
  return (
    <ConfigProvider locale={dayjs.locale() === 'vi' ? viVN : enUS}>
      <LoadingContainer>
        <Suspense fallback={<Loading />}>
          <NotificationContainer />
          <RouteContainer />
        </Suspense>
      </LoadingContainer>
    </ConfigProvider>
  );
}
