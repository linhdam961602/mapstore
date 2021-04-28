import React from 'react';
import loadable from '@loadable/component';

import Spinner from 'components/BasicComponent/Spinner';

export const lazy = (callback) =>
  loadable(callback, {
    fallback: (
      <div className="lazy-fallback">
        <Spinner size="large" />
      </div>
    ),
  });
