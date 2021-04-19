import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as userApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

import { notificationActions } from 'containers/NotificationContainer/slices';
import { SUCCESS_TYPE } from 'components/BasicComponent/Notification';

const resetPasswordSliceName = 'resetPassword';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const resetPasswordSlice = createSlice({
  name: resetPasswordSliceName,
  initialState,
  reducers: {
    resetPasswordProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    resetPasswordFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    resetPasswordSuccess: (state, action) => ({
      ...state,
      isLoading: false,
    }),
  },
});

const {
  actions: reducerActions,
  reducer: resetPasswordReducer,
} = resetPasswordSlice;

const resetPasswordSliceSaga = createSliceSaga({
  name: resetPasswordSliceName,
  caseSagas: {
    *resetPassword(action) {
      try {
        yield put(reducerActions.resetPasswordProcessing());
        const { data } = yield call(userApis.resetPassword, action.payload);
        yield put(reducerActions.resetPasswordSuccess(data));
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: data.info[0],
          }),
        );
      } catch (err) {
        yield put(reducerActions.resetPasswordFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const {
  saga: resetPasswordSaga,
  actions: sagaActions,
} = resetPasswordSliceSaga;

const resetPasswordActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  resetPasswordSliceName,
  resetPasswordActions,
  resetPasswordReducer,
  resetPasswordSaga,
  resetPasswordSliceSaga,
};
