import {
  KEY_CODES,
  REGEX_DUPLICATE,
  REGEX_EMAIL_BACK,
  REGEX_EMAIL_FRONT,
  REGEX_PASSWORD,
} from 'constants/common';

import { intl } from 'containers/LanguageProviderContainer';

export const passwordValidator = async (rule, value) => {
  if (value) {
    if (REGEX_PASSWORD.test(value) && REGEX_DUPLICATE.test(value)) {
      return Promise.resolve();
    }
    if (REGEX_DUPLICATE.test(value)) {
      return Promise.reject(
        intl.formatMessage({
          id: 'common.form.validate.regexMessage',
        }),
      );
    }
    return Promise.reject(
      intl.formatMessage({
        id: 'common.form.validate.regexDuplicateChar',
      }),
    );
  }
  return Promise.reject(
    intl.formatMessage(
      {
        id: 'common.error.noInput',
      },
      {
        field: intl.formatMessage({
          id: `common.form.field.label.${rule.field}`,
        }),
      },
    ),
  );
};

export const customValidator = async (rule, value, callback) => {
  const result = await callback(rule, value); // return boolean
  if (result) return Promise.resolve();

  return Promise.reject(
    intl.formatMessage(
      {
        id: 'common.error.noInput',
      },
      {
        field: intl.formatMessage({
          id: `common.form.field.label.${rule.field}`,
        }),
      },
    ),
  );
};

export const lengthValidator = async (rule, value, label) => {
  if (value) {
    if (value.length === rule.len) return Promise.resolve();

    return Promise.reject(
      intl.formatMessage(
        { id: 'common.form.validate.incorrect' },
        {
          field: label,
        },
      ),
    );
  }
};

export const emailValidator = async (value) => {
  if (value) {
    const chunks = value.split('@');

    if (chunks.length === 2 && chunks[0].length < 41 && chunks[1].length < 41) {
      if (
        REGEX_EMAIL_FRONT.test(chunks[0]) &&
        REGEX_EMAIL_BACK.test(chunks[1])
      ) {
        return Promise.resolve();
      }
    }

    return Promise.reject(
      intl.formatMessage(
        {
          id: 'common.form.validate.incorrect',
        },
        {
          field: intl.formatMessage({
            id: `common.form.field.label.email`,
          }),
        },
      ),
    );
  }
};

export const isBackspaceOrDelete = (e) =>
  e.keyCode === KEY_CODES.KEYCODE_BACKSPACE ||
  e.keyCode === KEY_CODES.KEYCODE_DELETE;

export const isArrows = (e) =>
  e.keyCode >= KEY_CODES.KEYCODE_LEFT && e.keyCode <= KEY_CODES.KEYCODE_DOWN;

export const isNumber = (e) =>
  (e.keyCode >= KEY_CODES.KEYCODE_0 && e.keyCode <= KEY_CODES.KEYCODE_9) ||
  (e.keyCode >= KEY_CODES.KEYCODE_PAD_0 &&
    e.keyCode <= KEY_CODES.KEYCODE_PAD_9);

export const isCtrlCVA = (e) =>
  (e.keyCode === KEY_CODES.KEYCODE_A ||
    e.keyCode === KEY_CODES.KEYCODE_C ||
    e.keyCode === KEY_CODES.KEYCODE_V) &&
  e.ctrlKey === true;

export const isHyphen = (e) => e.keyCode === KEY_CODES.KEYCODE_HYPHEN;

export const isShift = (e) => e.shiftKey === true;
