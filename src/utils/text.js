import { intl } from 'containers/LanguageProviderContainer';

export const createTranslatedText = (base, t = intl) => (name, params) =>
  t ? t.formatMessage({ id: `${base}.${name}` }, params) : `${base}.${name}`;
