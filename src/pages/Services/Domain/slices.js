import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as domainApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const domainSliceName = 'domain';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
  listDomainName: [],
  domainAvailability: { available: true },
};

const authSlice = createSlice({
  name: domainSliceName,
  initialState,
  reducers: {
    startLoading: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListDomainPriceFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListDomainPriceSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listDomainName: action.payload,
    }),
    getDomainAvailabilitySuccess: (state, action) => ({
      ...state,
      isLoading: false,
      domainAvailability: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: domainReducer } = authSlice;

const domainSliceSaga = createSliceSaga({
  name: domainSliceName,
  caseSagas: {
    *getListDomainPrice() {
      try {
        yield put(reducerActions.startLoading());
        const { data } = yield call(domainApis.getListDomainPrice);
        yield put(reducerActions.getListDomainPriceSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListDomainPriceFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getDomainAvailability() {
      try {
        yield put(reducerActions.startLoading());
        const { data } = yield call(domainApis.chechDomainAvailability, {
          name: 'nameValue',
        });
        yield put(reducerActions.getListDomainPriceSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListDomainPriceFailure(err));
        yield put(errorHandler(err));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga: domainSaga, actions: sagaActions } = domainSliceSaga;

const domainActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  domainSliceName,
  domainActions,
  domainReducer,
  domainSaga,
  domainSliceSaga,
};
