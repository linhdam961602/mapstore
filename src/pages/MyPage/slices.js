import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as userApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const userSliceName = 'userInfomation';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
};

const userSlice = createSlice({
  name: userSliceName,
  initialState,
  reducers: {
    getListServiceActiveProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListServiceActiveFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListServiceActiveSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listServiceActive: action.payload,
    }),
    getListDomainProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListDomainFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListDomainSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listDomain: action.payload,
    }),
    getListInvoiceProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListInvoiceFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListInvoiceSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listInvoice: action.payload,
    }),
    getListTicketProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListTicketFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListTicketSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listTicket: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: userReducer } = userSlice;

const userSliceSaga = createSliceSaga({
  name: userSliceName,
  caseSagas: {
    *getListServiceActive() {
      try {
        yield put(reducerActions.getListServiceActiveProcessing());
        const { data } = yield call(userApis.getListServiceActive);
        yield put(reducerActions.getListServiceActiveSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListServiceActiveFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getListDomain() {
      try {
        yield put(reducerActions.getListDomainProcessing());
        const { data } = yield call(userApis.getListDomain);
        yield put(reducerActions.getListDomainSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListDomainFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getListInvoice() {
      try {
        yield put(reducerActions.getListInvoiceProcessing());
        const { data } = yield call(userApis.getListInvoice);
        yield put(reducerActions.getListInvoiceSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListInvoiceFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getListTicket() {
      try {
        yield put(reducerActions.getListTicketProcessing());
        const { data } = yield call(userApis.getListTicket);
        yield put(reducerActions.getListTicketSuccess(data));
      } catch (err) {
        yield put(reducerActions.getListTicketFailure(err));
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
