import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as contactApis from './apis';

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
    getListContactProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getListContactFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getListContactSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      listContact: action.payload,
    }),
    getContactDetailProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    getContactDetailFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    getContactDetailSuccess: (state, action) => ({
      ...state,
      isLoading: false,
      contactDetail: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: contactReducer } = contactSlice;

const contactSliceSaga = createSliceSaga({
  name: contactSliceName,
  caseSagas: {
    *getListContact() {
      try {
        yield put(reducerActions.getListContactProcessing());
        const { data } = yield call(contactApis.getListContact);
        yield put(reducerActions.getListContactSuccess(data));
        if (data.contacts.length > 0) {
          yield put(
            contactSliceSaga.actions.getContactDetail(data.contacts[0].id),
          );
        }
      } catch (err) {
        yield put(reducerActions.getListContactFailure(err));
        yield put(errorHandler(err));
      }
    },
    *getContactDetail(payload) {
      try {
        yield put(reducerActions.getContactDetailProcessing());
        const { data } = yield call(
          contactApis.getContactDetail,
          payload.payload,
        );
        yield put(reducerActions.getContactDetailSuccess(data));
      } catch (err) {
        yield put(reducerActions.getContactDetailFailure(err));
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
