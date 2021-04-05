import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as authApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const userSliceName = 'userInfomation';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
  contactPrivileges: {},
};

const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    getContactPrivilegesProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getContactPrivilegesFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getContactPrivilegesSuccess: (state, action) => ({
      ...state,
      isLoading: true,
      contactPrivileges: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: userReducer } = userSlice;

const userSliceSaga = createSliceSaga({
  name: userSliceName,
  caseSagas: {
    *getContactPrivileges() {
      try {
        yield put(reducerActions.getContactPrivilegesProcessing());
        const { data } = yield call(authApis.getContactPrivileges);
        const { contact } = data;
        yield put(
          reducerActions.getContactPrivilegesSuccess(contact.privileges),
        );
      } catch (err) {
        yield put(reducerActions.getContactPrivilegesFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: userSaga, actions: sagaActions } = userSliceSaga;

const userActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  userSliceName,
  userActions,
  userReducer,
  userSaga,
  userSliceSaga,
};
