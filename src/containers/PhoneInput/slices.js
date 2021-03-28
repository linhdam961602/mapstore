import { createSlice } from '@reduxjs/toolkit';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';
import { put, call } from 'redux-saga/effects';

import * as countryApis from './apis';

import { errorHandler } from 'store/errorHandlerSaga';

const countrySliceName = 'countries';

const initialState = {
  isLoading: false,
  countryList: null,
};

const countrySlice = createSlice({
  name: countrySliceName,
  initialState,
  reducers: {
    fetchCountriesSuccess: (state, action) => ({
      ...state,
      countryList: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer: countryReducer } = countrySlice;

const countrySliceSaga = createSliceSaga({
  name: countrySliceName,
  caseSagas: {
    *fetchCountries() {
      try {
        const { data } = yield call(countryApis.getCountryList);
        if (data) {
          //   Get name, nativeName, callingCodes, flag
          const filteredData = data.map(
            ({ name, nativeName, callingCodes, flag }) => ({
              name,
              nativeName,
              callingCodes,
              flag,
            }),
          );
          yield put(reducerActions.fetchCountriesSuccess(filteredData));
        }
      } catch (error) {
        yield put(errorHandler(error));
      }
    },
  },
  sagaType: SagaType.TakeLatest,
});

const { saga: countrySaga, actions: sagaActions } = countrySliceSaga;

const countryActions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  countrySliceName,
  countryActions,
  countryReducer,
  countrySaga,
};
