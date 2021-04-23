import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as clientApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

import { notificationActions } from 'containers/NotificationContainer/slices';
import { SUCCESS_TYPE } from 'components/BasicComponent/Notification';

const clientSliceName = 'clientInformation';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const clientSlice = createSlice({
  name: clientSliceName,
  initialState,
  reducers: {
    saveClientProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    saveClientFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    saveClientSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
  },
});

const { actions: reducerActions, reducer: clientReducer } = clientSlice;

const clientSliceSaga = createSliceSaga({
  name: clientSliceName,
  caseSagas: {
    *saveClientInformation(action) {
      try {
        yield put(reducerActions.saveClientProcessing());
        const { data } = yield call(
          clientApis.saveClientInformation,
          action.payload,
        );
        yield put(reducerActions.saveClientSuccess(data));
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: data.info[0],
          }),
        );
      } catch (err) {
        yield put(reducerActions.saveClientFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: clientSaga, actions: sagaActions } = clientSliceSaga;

const clientActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  clientSliceName,
  clientActions,
  clientReducer,
  clientSaga,
  clientSliceSaga,
};
