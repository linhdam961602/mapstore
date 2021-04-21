import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import * as registerApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';
import { notificationActions } from 'containers/NotificationContainer/slices';
import { SUCCESS_TYPE } from 'components/BasicComponent/Notification';
import { LOGIN_URL } from 'constants/routes';

const registerSliceName = 'register';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
  countryList: [],
  stateCityData: [],
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
    fetchStateCitySuccess: (state, action) => ({
      ...state,
      stateCityData: action.payload,
    }),
    fetchCountriesSuccess: (state, action) => ({
      ...state,
      countryList: action.payload,
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

        const { data } = yield call(registerApis.signup, action.payload);
        if (data.info) {
          yield put(reducerActions.registerSuccess());

          // Show success notification
          yield put(
            notificationActions.showNotification({
              type: SUCCESS_TYPE,
              message: data.info[0],
            }),
          );
          // Redirect to login
          yield put(push(LOGIN_URL));
        }
      } catch (error) {
        yield put(reducerActions.registerFailure(error));
        yield put(errorHandler(error));
      }
    },
    *fetchCountries() {
      try {
        const { data } = yield call(registerApis.getCountryList);
        if (data) {
          const filteredData = data.map(({ name }) => ({
            name,
          }));
          yield put(reducerActions.fetchCountriesSuccess(filteredData));
        }
      } catch (error) {
        yield put(errorHandler(error));
      }
    },
    *fetchStateCity() {
      try {
        const { data } = yield call(registerApis.getStateCity);
        if (data) {
          const filteredData = data.map(({ name, level2s }) => ({
            name,
            districts: level2s,
          }));
          yield put(reducerActions.fetchStateCitySuccess(filteredData));
        }
      } catch (error) {
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
