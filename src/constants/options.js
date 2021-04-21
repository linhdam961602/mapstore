import { createTranslatedText } from 'utils/text';

export const TYPE_PRIVATE = 'Private';
export const TYPE_COMPANY = 'Company';

export const TYPES_OF_SUBJECT = (intl) => {
  const getTextTypeOfSubject = createTranslatedText('common.labels', intl);
  return {
    PERSONAL: {
      value: TYPE_PRIVATE,
      label: getTextTypeOfSubject('personal'),
    },
    COMPANY: {
      value: TYPE_COMPANY,
      label: getTextTypeOfSubject('company'),
    },
  };
};

export const TYPES_OF_CURRENCY = {
  VND: {
    value: 'VND',
    label: 'VND',
  },
  USD: {
    value: 'USD',
    label: 'USD',
  },
};
