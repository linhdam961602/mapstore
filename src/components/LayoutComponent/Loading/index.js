import React from 'react';

import Spinner from 'components/BasicComponent/Spinner';

const Loading = () => (
  <div className="lazy-fallback">
    <Spinner size="large" />
  </div>
);

export default Loading;
