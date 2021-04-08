/* eslint-disable no-template-curly-in-string */
import { intl } from 'containers/LanguageProviderContainer';

export const LAYOUT_4_20 = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};

export const LAYOUT_12_12 = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 12,
  },
};

export const LAYOUT_6_18 = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};

export const LAYOUT_8_16 = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export const LAYOUT_0_24 = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 24,
  },
};

export const LAYOUT_6_24 = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 24,
  },
};

export const LAYOUT_24_0 = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 0,
  },
};

export const LAYOUT_9_15 = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 15,
  },
};

export const LAYOUT_10_14 = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 14,
  },
};

export const LAYOUT_16_8 = {
  labelCol: {
    span: 16,
  },
  wrapperCol: {
    span: 8,
  },
};

export const VALIDATION_MESSAGES = {
  required: intl.formatMessage(
    { id: 'common.error.noInput' },
    {
      field: '${label}',
    },
  ),
  whitespace: intl.formatMessage(
    { id: 'common.error.noInput' },
    {
      field: '${label}',
    },
  ),
  pattern: {
    mismatch: intl.formatMessage(
      { id: 'common.error.formValidate' },
      {
        field: '${label}',
      },
    ),
  },
};
