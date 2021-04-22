import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as serviceApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const serviceSliceName = 'service';

const initialState = {
  isLoading: false,
  error: null,
  categories: null,
};

const serviceSlice = createSlice({
  name: serviceSliceName,
  initialState,
  reducers: {
    fetchCategoryProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    fetchCategoryFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    fetchCategorySuccess: (state, action) => ({
      ...state,
      ...action.payload,
      isLoading: false,
    }),
  },
});

const { actions: reducerActions, reducer: serviceReducer } = serviceSlice;

const serviceSliceSaga = createSliceSaga({
  name: serviceSliceName,
  caseSagas: {
    *fetchCategory() {
      try {
        yield put(reducerActions.fetchCategoryProcessing());
        const { data } = yield call(serviceApis.getCategoryList);
        yield put(reducerActions.fetchCategorySuccess(data));
      } catch (err) {
        yield put(reducerActions.fetchCategoryFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: serviceSaga, actions: sagaActions } = serviceSliceSaga;

const serviceActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  serviceSliceName,
  serviceActions,
  serviceReducer,
  serviceSaga,
  serviceSliceSaga,
};
