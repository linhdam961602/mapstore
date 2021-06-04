import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as domainApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const domainSliceName = 'domain';

const initialState = {
  error: null,
  extendTime: 0,
  listDomainExtension: [],
  isLoadingListDomainExtension: false,
  domainAvailability: { available: false }, // TODO: Waiting update response API.
  isLoadingDomainAvailability: false,
};

const authSlice = createSlice({
  name: domainSliceName,
  initialState,
  reducers: {
    getListDomainExtensionProcessing: (state) => ({
      ...state,
      isLoadingListDomainExtension: true,
    }),
    getListDomainExtensionSuccess: (state, action) => ({
      ...state,
      listDomainExtension: action.payload,
      isLoadingListDomainExtension: false,
    }),
    getListDomainExtensionFailure: (state, action) => ({
      ...state,
      error: action.payload,
      isLoadingListDomainExtension: false,
    }),
    getDomainAvailabilityProcessing: (state) => ({
      ...state,
      isLoadingDomainAvailability: true,
    }),
    getDomainAvailabilitySuccess: (state, action) => ({
      ...state,
      domainAvailability: action.payload,
      isLoadingDomainAvailability: false,
    }),
    getDomainAvailabilityFailure: (state, action) => ({
      ...state,
      error: action.payload,
      isLoadingDomainAvailability: false,
    }),
  },
});

const { actions: reducerActions, reducer: domainReducer } = authSlice;

const domainSliceSaga = createSliceSaga({
  name: domainSliceName,
  caseSagas: {
    *getListDomainExtension() {
      try {
        yield put(reducerActions.getListDomainExtensionProcessing());
        const { data } = yield call(domainApis.getListDomainExtension);
        yield put(reducerActions.getListDomainExtensionSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListDomainExtensionFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getDomainAvailability(payload) {
      console.log('payload: ', payload);
      try {
        yield put(reducerActions.getDomainAvailabilityProcessing());
        const { data } = yield call(domainApis.chechDomainAvailability, {
          name: 'nameValue',
        });
        yield put(reducerActions.getDomainAvailabilitySuccess(data));
      } catch (err) {
        yield put(reducerActions.getDomainAvailabilityFailure(err));
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
