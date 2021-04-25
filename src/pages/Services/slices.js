import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as serviceApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const serviceSliceName = 'service';

const initialState = {
  isLoading: false,
  isFetchingProducts: false,
  error: null,
  categories: null,
  products: [],
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
    fetchProductsProcessing: (state) => ({
      ...state,
      isFetchingProducts: true,
    }),
    fetchProductsFailure: (state, action) => ({
      ...state,
      isFetchingProducts: false,
      error: action.payload,
    }),
    fetchProductsSuccess: (state, action) => ({
      ...state,
      ...action.payload,
      isFetchingProducts: false,
    }),
    clearProducts: (state) => ({
      ...state,
      products: initialState.products,
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
    *fetchProductsByCategory(action) {
      try {
        yield put(reducerActions.fetchProductsProcessing());
        const { data } = yield call(
          serviceApis.getProductByCategory,
          action.payload,
        );

        if (data) {
          yield put(reducerActions.fetchProductsSuccess(data));
        }
      } catch (err) {
        yield put(reducerActions.fetchProductsFailure(err));
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
