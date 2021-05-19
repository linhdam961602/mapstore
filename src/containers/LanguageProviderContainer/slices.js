import { createSlice } from '@reduxjs/toolkit';
import * as dayjs from 'dayjs';
import moment from 'moment';

import { DEFAULT_LOCALE } from 'translations/i18n';
import { LANGUAGE } from 'constants/common';
import localStorageService from 'utils/localStorage';

const languageSliceName = 'i18n';

const initialState = {
  locale: localStorageService.getItem(LANGUAGE) || DEFAULT_LOCALE,
};

const languageSlice = createSlice({
  name: languageSliceName,
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      // Save to local storage
      localStorageService.setItem(LANGUAGE, action.payload);

      dayjs.locale(action.payload);
      moment.locale(action.payload);

      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

const { actions: languageActions, reducer: languageReducer } = languageSlice;

export { languageSliceName, languageActions, languageReducer, initialState };
