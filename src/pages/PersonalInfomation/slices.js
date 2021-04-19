import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as userApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const contactSliceName = 'contact';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const contactSlice = createSlice({
  name: contactSliceName,
  initialState,
  reducers: {
    saveContactProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    saveContactFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    saveContactSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listServiceActive: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: contactReducer } = contactSlice;

const contactSliceSaga = createSliceSaga({
  name: contactSliceName,
  caseSagas: {
    *saveContact(action) {
      try {
        yield put(reducerActions.saveContactProcessing());
        const { data } = yield call(userApis.saveContact, action.payload);
        yield put(reducerActions.saveContactSuccess(data));
      } catch (err) {
        yield put(reducerActions.saveContactFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: contactSaga, actions: sagaActions } = contactSliceSaga;

const contactActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  contactSliceName,
  contactActions,
  contactReducer,
  contactSaga,
  contactSliceSaga,
};
