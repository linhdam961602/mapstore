import { createSlice } from '@reduxjs/toolkit';

import { DEFAULT_LOCALE } from 'translations/i18n';

import { LANGUAGE } from 'constants/common';
import localStorageService from 'utils/localStorage';

const selectSliceName = 'i18n';

const initialState = {
  locale: DEFAULT_LOCALE,
};

const selectSlice = createSlice({
  name: selectSliceName,
  initialState,
  reducers: {
    changeLocale: (state, action) => {
      // Save to local storage
      localStorageService.setItem(LANGUAGE, action.payload);

      return {
        ...state,
        locale: action.payload,
      };
    },
  },
});

const { actions: selectActions, reducer: selectReducer } = selectSlice;

export { selectSliceName, selectActions, selectReducer, initialState };
