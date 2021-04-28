import React from 'react';
import loadable from '@loadable/component';

import Loading from 'components/LayoutComponent/Loading';

export const lazy = (callback) =>
  loadable(callback, {
    fallback: <Loading />,
  });
