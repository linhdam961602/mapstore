import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { authReducer, authSliceName } from 'pages/LoginPage/slices';
import { userReducer, userSliceName } from 'pages/HomePage/slices';

import history from 'utils/history';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    [authSliceName]: authReducer,
    [userSliceName]: userReducer,
    ...injectedReducers,
  });
  return rootReducer;
}

export default createReducer;
