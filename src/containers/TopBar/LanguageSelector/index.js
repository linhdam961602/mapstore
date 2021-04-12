import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';

import Select from 'components/BasicComponent/Select';
import {
  languageActions,
  languageSliceName,
  initialState,
} from 'containers/LanguageProviderContainer/slices';
import { appLocales } from 'translations/i18n';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], initialState.locale),
  );

  return (
    <Select
      value={locale}
      options={appLocales}
      onChange={(value) => {
        dispatch(languageActions.changeLocale(value));
      }}
    />
  );
};

export default LanguageSelector;
