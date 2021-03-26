import { intl } from 'containers/LanguageProviderContainer';

export const createTranslatedText = (base, t = intl) => (name) =>
  t ? t.formatMessage({ id: `${base}.${name}` }) : `${base}.${name}`;
