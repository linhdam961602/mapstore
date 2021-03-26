import {
  useInjectSaga as injectSaga,
  SagaInjectionModes,
} from 'redux-injectors';
import { useEffect } from 'react';

import { useStore } from 'react-redux';

import createReducer from 'store/rootReducer';

export const useInjectReducer = ({ key, reducer }) => {
  const store = useStore();

  useEffect(() => {
    // Inject reducer if it is not in store
    if (!store.injectedReducers[key]) {
      store.injectedReducers[key] = reducer;
      store.replaceReducer(createReducer(store.injectedReducers));
    }
  }, [key, reducer, store]);

  // Remove reducer when unmounting component
  useEffect(
    () => () => {
      delete store.injectedReducers[key];
      store.replaceReducer(createReducer(store.injectedReducers));
    },
    [key, store],
  );
};

export const useInjectSaga = ({
  key,
  saga,
  mode = SagaInjectionModes.DAEMON,
}) => {
  injectSaga({ key, saga, mode });
};
