import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as authApis from './apis';

import * as auth from 'utils/authHelper';
import { errorHandler } from 'store/errorHandlerSaga';
import history from 'utils/history';
import { HOME_URI } from 'constants/routes';

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
    loginSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    loginFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getUserInfoProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getUserInfoFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getUserInfoSuccess: (state, action) => ({
      ...state,
      isLoading: true,
      userInfo: action.payload,
    }),
    resetAuthReducer: () => initialState,
  },
});

const { actions: reducerActions, reducer: authReducer } = authSlice;

const authSliceSaga = createSliceSaga({
  name: authSliceName,
  caseSagas: {
    *getUserInfo() {
      try {
        yield put(reducerActions.getUserInfoProcessing());
        const { data } = yield call(authApis.getUserInfo);
        const { client } = data;

        yield put(reducerActions.getUserInfoSuccess(client));
      } catch (err) {
        yield put(reducerActions.getUserInfoFailure(err));
        yield put(errorHandler(err));
      }
    },
    *login(action) {
      try {
        yield put(reducerActions.loginProcessing());
        const { data } = yield call(authApis.login, action.payload);

        if (data.token) {
          // set token to cookie
          const expireIn = auth.getExpireInByToken(data.token);

          auth.setAccessToken(data.token, expireIn);
          auth.setExpireIn(expireIn);
          yield put(reducerActions.loginSuccess());
          history.push(HOME_URI);
          yield put(authSliceSaga.actions.getUserInfo());
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
