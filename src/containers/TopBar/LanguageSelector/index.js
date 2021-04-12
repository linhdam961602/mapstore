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

import '../styles.scss';

const LanguageSelector = () => {
  const dispatch = useDispatch();

  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], initialState.locale),
  );

  return (
    <div className="language__container">
      <Select
        value={locale}
        options={appLocales}
        onChange={(value) => {
          dispatch(languageActions.changeLocale(value));
        }}
      />
    </div>
  );
};

export default LanguageSelector;
