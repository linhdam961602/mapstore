import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import { authReducer, authSliceName } from 'pages/LoginPage/slices';
import { userReducer, userSliceName } from 'pages/MyPage/slices';
import {
  languageReducer,
  languageSliceName,
} from 'containers/LanguageProviderContainer/slices';

import history from 'utils/history';

function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    [authSliceName]: authReducer,
    [userSliceName]: userReducer,
    [languageSliceName]: languageReducer,
    ...injectedReducers,
  });
  return rootReducer;
}

export default createReducer;
