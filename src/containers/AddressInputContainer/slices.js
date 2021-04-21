import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as addressApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const addressSliceName = 'address';

const initialState = {
  isLoading: false,
  error: null,
  extendTime: 0,
  countryList: [],
  stateCityData: [],
};

const addressSlice = createSlice({
  name: addressSliceName,
  initialState,
  reducers: {
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

const { actions: reducerActions, reducer: addressReducer } = addressSlice;

const addressSliceSaga = createSliceSaga({
  name: addressSliceName,
  caseSagas: {
    *fetchCountries() {
      try {
        const { data } = yield call(addressApis.getCountryList);
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
        const { data } = yield call(addressApis.getStateCity);
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

const { saga: addressSaga, actions: sagaActions } = addressSliceSaga;

const addressActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  addressSliceName,
  addressActions,
  addressReducer,
  addressSaga,
  addressSliceSaga,
};
