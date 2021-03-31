import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as authApis from './apis';

import * as auth from 'utils/authHelper';
import { errorHandler } from 'store/errorHandlerSaga';

const authSliceName = 'auth';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const authSlice = createSlice({
  name: authSliceName,
  initialState,
  reducers: {
    loginProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    loginSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      userInfo: action.payload,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    resetAuthReducer: () => initialState,
  },
});

const { actions: reducerActions, reducer: authReducer } = authSlice;

const authSliceSaga = createSliceSaga({
  name: authSliceName,
  caseSagas: {
    *login(action) {
      try {
        yield put(reducerActions.loginProcessing());
        const { data } = yield call(authApis.login, action.payload);

        if (data.token) {
          // set token to cookie
          const expireIn = auth.getExpireInByToken(data.token);
          auth.setAccessToken(data.token, expireIn);
          auth.setExpireIn(expireIn);
        }
      } catch (error) {
        yield put(reducerActions.loginFailure(error));
        yield put(errorHandler(error));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: authSaga, actions: sagaActions } = authSliceSaga;

const authActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  authSliceName,
  authActions,
  authReducer,
  authSaga,
  authSliceSaga,
};
