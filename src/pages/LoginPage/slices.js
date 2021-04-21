import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as authApis from './apis';

import * as auth from 'utils/authHelper';
import { errorHandler } from 'store/errorHandlerSaga';
import { LOGIN_URL, MY_PAGE_URI } from 'constants/routes';

const authSliceName = 'auth';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
  userInfo: null,
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

          // Get user info
          yield put(authSliceSaga.actions.getUserInfo());

          // redirect to home page
          yield put(push(MY_PAGE_URI));
        }
      } catch (error) {
        yield put(reducerActions.loginFailure(error));
        yield put(errorHandler(error));
      }
    },
    *loginWGoogle(action) {
      try {
        const { tokenObj } = action.payload;
        if (tokenObj) {
          auth.setAccessToken(tokenObj.access_token, tokenObj.expires_in);
          auth.setExpireIn(tokenObj.expires_in);
        }
      } catch (err) {
        yield put(errorHandler(err));
      }
    },
    *logout() {
      try {
        const { data } = yield call(authApis.logout);
        if (data.status) {
          // Log out success
          auth.clearUserCredential();

          // push to login
          yield put(push(LOGIN_URL));
        }
      } catch (err) {
        yield put(errorHandler(err));
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
