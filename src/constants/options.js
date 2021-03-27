import { intl } from 'containers/LanguageProviderContainer';

export const TYPES_OF_SUBJECT = {
  PERSONAL: {
    value: 'personal',
    label: intl.formatMessage({
      id: 'common.labels.personal',
    }),
  },
  COMPANY: {
    value: 'company',
    label: intl.formatMessage({
      id: 'common.labels.company',
    }),
  },
};

export const TYPES_OF_PERSONAL_TITLE = {
  MR: {
    value: 'mr',
    label: intl.formatMessage({
      id: 'common.labels.mr',
    }),
  },
  MRS: {
    value: 'mrs',
    label: intl.formatMessage({
      id: 'common.labels.mrs',
    }),
  },
  MISS: {
    value: 'miss',
    label: intl.formatMessage({
      id: 'common.labels.miss',
    }),
  },
};

export const TYPES_OF_HOW_TO_FIND = {
  FACEBOOK: {
    value: 'facebook',
    label: intl.formatMessage({
      id: 'common.labels.facebook',
    }),
  },
  GOOGLE: {
    value: 'google',
    label: intl.formatMessage({
      id: 'common.labels.google',
    }),
  },
  FRIENDS: {
    value: 'friendAdvise',
    label: intl.formatMessage({
      id: 'common.labels.friendAdvise',
    }),
  },
  ADS: {
    value: 'ads',
    label: intl.formatMessage({
      id: 'common.labels.ads',
    }),
  },
  SEARCH_ENGINES: {
    value: 'searchEngines',
    label: intl.formatMessage({
      id: 'common.labels.searchEngines',
    }),
  },
  OTHERS: {
    value: 'otherSources',
    label: intl.formatMessage({
      id: 'common.labels.otherSources',
    }),
  },
};
