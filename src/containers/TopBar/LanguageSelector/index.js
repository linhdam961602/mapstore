import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import get from 'lodash/get';
import { useIntl } from 'react-intl';

import Select from 'components/BasicComponent/Select';
import {
  languageActions,
  languageSliceName,
  initialState,
} from 'containers/LanguageProviderContainer/slices';
import { appLocales } from 'translations/i18n';
import { createTranslatedText } from 'utils/text';

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const getText = createTranslatedText('common.language', intl);

  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], initialState.locale),
  );

  return (
    <Select
      value={locale}
      options={appLocales.map((language) => ({
        value: language,
        label: getText(language),
      }))}
      onChange={(value) => {
        dispatch(languageActions.changeLocale(value));
      }}
      size="small"
    />
  );
};

export default LanguageSelector;
