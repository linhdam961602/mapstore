/* eslint-disable global-require */
/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, and must use CommonJS module syntax
 *   You CANNOT use import/export in this file.
 */

import viTranslationMessages from 'translations/vi';
import enTranslationMessages from 'translations/en';

const DEFAULT_LOCALE = 'vi';
const appLocales = ['vi', 'en'];

/**
 * this function use to flatten the object nested in language json file
 * @param nestedMessages
 * @param prefix
 * @returns {{}}
 */
const flattenMessages = (nestedMessages, prefix = '') =>
  Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    const cloneMessage = { ...messages };

    if (typeof value === 'string') {
      cloneMessage[prefixedKey] = value;
    } else {
      Object.assign(cloneMessage, flattenMessages(value, prefixedKey));
    }

    return cloneMessage;
  }, {});

const translationMessages = {
  vi: flattenMessages(viTranslationMessages),
  en: flattenMessages(enTranslationMessages),
};

export { appLocales, translationMessages, DEFAULT_LOCALE };
