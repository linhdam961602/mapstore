import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as registerApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const registerSliceName = 'register';

const SUCCESS_CODE = 'client_registered'; // TODO: Change after configurating interceptor

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const registerSlice = createSlice({
  name: registerSliceName,
  initialState,
  reducers: {
    registerProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    registerSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    registerFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: registerReducer } = registerSlice;

const registerSliceSaga = createSliceSaga({
  name: registerSliceName,
  caseSagas: {
    *signup(action) {
      try {
        yield put(reducerActions.registerProcessing());

        const { info } = yield call(registerApis.signup, action.payload);
        if (info.indexOf(SUCCESS_CODE) !== -1) {
          yield put(reducerActions.registerSuccess());
        }
      } catch (error) {
        yield put(reducerActions.registerFailure(error));
        yield put(errorHandler(error));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: registerSaga, actions: sagaActions } = registerSliceSaga;

const registerActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  registerSliceName,
  registerActions,
  registerReducer,
  registerSaga,
  registerSliceSaga,
};
