import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as forgotPasswordApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';
import { notificationActions } from 'containers/NotificationContainer/slices';
import { SUCCESS_TYPE } from 'components/BasicComponent/Notification';
import { LOGIN_URL } from 'constants/routes';

const forgotPasswordSliceName = 'forgotPassword';

const initialState = {
  isLoading: false,
  error: null,
};

const forgotPasswordSlice = createSlice({
  name: forgotPasswordSliceName,
  initialState,
  reducers: {
    forgotPasswordProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    forgotPasswordSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    forgotPasswordFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

const {
  actions: reducerActions,
  reducer: forgotPasswordReducer,
} = forgotPasswordSlice;

const forgotPasswordSliceSaga = createSliceSaga({
  name: forgotPasswordSliceName,
  caseSagas: {
    *forgotPassword(action) {
      try {
        yield put(reducerActions.forgotPasswordProcessing());

        const { data } = yield call(
          forgotPasswordApis.forgotPassword,
          action.payload,
        );
        if (data.info) {
          yield put(reducerActions.forgotPasswordSuccess());

          // Show success notification
          yield put(
            notificationActions.showNotification({
              type: SUCCESS_TYPE,
              message: data.info[0],
            }),
          );
        }
      } catch (error) {
        yield put(reducerActions.forgotPasswordFailure(error));
        yield put(errorHandler(error));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const {
  saga: forgotPasswordSaga,
  actions: sagaActions,
} = forgotPasswordSliceSaga;

const forgotPasswordActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  forgotPasswordSliceName,
  forgotPasswordActions,
  forgotPasswordReducer,
  forgotPasswordSaga,
  forgotPasswordSliceSaga,
};
