import { intl } from 'containers/LanguageProvider';

export const createTranslatedText = (base, t = intl) => name =>
  t ? t.formatMessage({ id: `${base}.${name}` }) : `${base}.${name}`;