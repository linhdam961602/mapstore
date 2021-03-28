import { intl } from 'containers/LanguageProviderContainer';
import { createTranslatedText } from 'utils/text';

const getText = createTranslatedText('common.labels', intl);

export const TYPES_OF_SUBJECT = {
  PERSONAL: {
    value: 'personal',
    label: getText('personal'),
  },
  COMPANY: {
    value: 'company',
    label: getText('company'),
  },
};

export const TYPES_OF_PERSONAL_TITLE = {
  NONE: {
    value: '',
    label: getText('none'),
  },
  MR: {
    value: 'mr',
    label: getText('mr'),
  },
  MRS: {
    value: 'mrs',
    label: getText('mrs'),
  },
  MISS: {
    value: 'miss',
    label: getText('miss'),
  },
};

export const TYPES_OF_HOW_TO_FIND = {
  FACEBOOK: {
    value: 'facebook',
    label: getText('facebook'),
  },
  GOOGLE: {
    value: 'google',
    label: getText('google'),
  },
  FRIENDS: {
    value: 'friendAdvise',
    label: getText('friendAdvise'),
  },
  ADS: {
    value: 'ads',
    label: getText('ads'),
  },
  SEARCH_ENGINES: {
    value: 'searchEngines',
    label: getText('searchEngines'),
  },
  OTHERS: {
    value: 'otherSources',
    label: getText('otherSources'),
  },
};
