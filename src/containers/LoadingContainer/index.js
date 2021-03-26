import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import { loadingSliceName, loadingReducer, initialState } from './slices';

import Spinner from 'components/BasicComponent/Spinner';
import { useInjectReducer } from 'hooks/useInjector';

function LoadingContainer({ children }) {
  useInjectReducer({
    key: loadingSliceName,
    reducer: loadingReducer,
  });

  const isLoading = useSelector((state) =>
    get(state, [loadingSliceName, 'isLoading'], initialState.isLoading),
  );

  return <Spinner spinning={isLoading}>{children}</Spinner>;
}

LoadingContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

LoadingContainer.defaultProps = {
  children: null,
};

export default LoadingContainer;
