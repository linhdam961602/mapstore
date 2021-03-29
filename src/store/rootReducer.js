import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { authReducer, authSliceName } from 'pages/LoginPage/slices';

import history from 'utils/history';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    [authSliceName]: authReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });
  return rootReducer;
}

export default createReducer;
