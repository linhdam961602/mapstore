/* eslint-disable import/no-mutable-exports */
/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages
 */
import React, { useEffect } from 'react';
import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import * as dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import { languageSliceName, initialState } from './slices';

import { translationMessages, DEFAULT_LOCALE } from 'translations/i18n';

dayjs.locale(DEFAULT_LOCALE);

export let intl = createIntl(
  {
    locale: DEFAULT_LOCALE,
    messages: translationMessages[DEFAULT_LOCALE],
  },
  createIntlCache(),
);

export const formatMessageUtil = (intlObj = intl) => (id) =>
  intlObj.formatMessage({ id });

function LanguageProvider({ messages, children }) {
  const locale = useSelector((state) =>
    get(state, [languageSliceName, 'locale'], initialState.locale),
  );

  useEffect(() => {
    if (!messages) return;

    // This is optional but highly recommended
    // since it prevents memory leak
    const cache = createIntlCache();
    intl = createIntl(
      {
        locale,
        messages: messages[locale],
      },
      cache,
    );
    dayjs.locale(locale);
  }, [locale, messages]);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export default LanguageProvider;
