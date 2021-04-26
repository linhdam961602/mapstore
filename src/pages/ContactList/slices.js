import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as contactApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';
import { notificationActions } from 'containers/NotificationContainer/slices';
import { SUCCESS_TYPE } from 'components/BasicComponent/Notification';

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
    addContactDetailProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    addContactDetailFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    addContactDetailSuccess: (state) => ({
      ...state,
      isLoading: false,
    }),
    updateContactDetailProcessing: (state) => ({
      ...state,
      isLoading: true,
    }),
    updateContactDetailFailure: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    updateContactDetailSuccess: (state) => ({
      ...state,
      isLoading: false,
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
    *addContactDetail(payload) {
      try {
        yield put(reducerActions.addContactDetailProcessing());
        const { data } = yield call(
          contactApis.addContactDetail,
          payload.payload,
        );
        yield put(reducerActions.addContactDetailSuccess());
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: data.info[0],
          }),
        );
      } catch (err) {
        yield put(reducerActions.addContactDetailFailure(err));
        yield put(errorHandler(err));
      }
    },
    *updateContactDetail(payload) {
      try {
        yield put(reducerActions.updateContactDetailProcessing());
        const { data } = yield call(
          contactApis.updateContactDetail,
          payload.payload,
        );
        yield put(reducerActions.updateContactDetailSuccess());
        yield put(
          notificationActions.showNotification({
            type: SUCCESS_TYPE,
            message: data.info[0],
          }),
        );
      } catch (err) {
        yield put(reducerActions.updateContactDetailFailure(err));
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
