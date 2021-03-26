/* eslint-disable array-callback-return */
/* eslint-disable no-empty */
/* eslint-disable no-underscore-dangle */
/* eslint-disable indent */
/* eslint-disable no-bitwise */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
// TODO: Fix eslint

import React from 'react';
import dayjs from 'dayjs';
import isEmpty from 'lodash/isEmpty';
import _isInteger from 'lodash/isInteger';
import toNumber from 'lodash/toNumber';
import flattenDeep from 'lodash/flattenDeep';
import isArray from 'lodash/isArray';

import Select from 'components/BasicComponents/Select';
import { Radio } from 'components/BasicComponents/RadioGroup';

import { intl } from 'containers/LanguageProviderContainer';
import {
  isNumber,
  isCtrlCVA,
  isHyphen,
  isArrows,
  isShift,
  isBackspaceOrDelete,
} from 'helpers/inputValidator';

export const encodeToBase64 = (input) => btoa(input);
export const decodeFromBase64 = (input) => atob(input);

export const convertToBlob = (object) =>
  new Blob([JSON.stringify(object)], {
    type: 'application/json',
  });

export const convertToFormData = (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return formData;
};

export const flattenArrayList = (menus) => {
  if (isEmpty(menus)) return [];

  const flattened = [];
  menus.forEach((menu) => {
    if (menu.children.length > 0) {
      flattened.push({ ...menu });
      flattened.push(flattenArrayList(menu.children));
    } else {
      flattened.push({ ...menu });
    }
  });

  return flattenDeep(flattened);
};

export const trim = (field) => field.toString().trim();

export const isBlank = (field) =>
  field === null || field === undefined || field.toString().trim() === '';

export const isInteger = (str) => _isInteger(toNumber(str));

// This validator just return the first error field ( not all error fields )
export const checkRequiredField = (fields, changedData) => {
  for (const field of fields) {
    if (isArray(changedData)) {
      for (const item of changedData) {
        if (isBlank(item[field])) {
          return field;
        }
      }
    } else if (isBlank(changedData[field])) {
      return field;
    }
  }
};

// This validator all error fields
export const checkRequiredFields = (fields, changedData) => {
  const fieldsErr = [];
  for (const field of fields) {
    if (isArray(changedData)) {
      for (const item of changedData) {
        if (isBlank(item[field])) {
          fieldsErr.push(field);
        }
      }
    } else if (isBlank(changedData[field])) {
      fieldsErr.push(field);
    }
  }

  return fieldsErr;
};

export const trimSearchData = (value, excludedKeys = []) => {
  const mappedData = { ...value };

  Object.keys(mappedData).map((key) => {
    if (excludedKeys.includes(key)) return;
    const name = mappedData[key];
    if (name) {
      mappedData[key] = name.toString().trim().replace(/\s+/g, ' ');
    }
  });

  return mappedData;
};

export const renderOptions = (options) =>
  options.map((option) => (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Select.Option
      value={option.key ?? option.value}
      key={option.key ?? option.value}
    >
      {option.title ?? option.value}
    </Select.Option>
  ));

/**
 * Indicates the difference between two date-time in the specified unit
 * Based on dayjs#diff
 * https://day.js.org/docs/en/display/difference
 * @param {Date} date1 - the first date to be compared
 * @param {Date} date2 - the second date to be compared,
 * @param {string} unit - unit of measurement, default is 'day'
 * @param {boolean} floatingPoint
 */
export const compareDates = (
  date1,
  date2,
  unit = 'day',
  floatingPoint = false,
) => {
  const _date1 = dayjs(date1);
  // If date2 is null or undefined => set default to now
  const _date2 = date2 ? dayjs(date2) : dayjs();

  return _date1.diff(_date2, unit, floatingPoint);
};

/**
 *
 * @param {number} value - Value to be formatted
 * @param {number} beforeDecimal  - Number of digits before decimal
 * @param {number} afterDecimal - Number of digits after decimal
 * @return {number} Formatted Number
 */
export const formatFloat = (value, beforeDecimal, afterDecimal) => {
  let tmp = value;
  // while whole number has more digits than number of digits before decimals
  while (tmp >= 10 ** beforeDecimal) {
    tmp /= 10;
  }

  // If value is Integer, don't need fractional part
  return Number.isInteger(value)
    ? Math.floor(tmp)
    : Math.floor(tmp * 10 ** afterDecimal) / 10 ** afterDecimal;
};

export const isColTypeNumber = (ibsheet, row, field) =>
  ibsheet.getType(row, field) === ('Float' || 'Int');

export const getValueObjByKeys = (obj, keys) => {
  if (!obj) return {};
  return keys.reduce((acc, val) => {
    acc[val] = obj[val];
    return acc;
  }, {});
};

export const convertToSafeNullObject = (obj) => {
  const newObj = {};
  for (const key in obj) {
    newObj[key] = obj[key] ?? '';
  }
  return newObj;
};

export const getImgBase64Url = (base64String, type) =>
  `data:image/${type};base64,${base64String}`;

export const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// For datepicker
export const disabledWhen = (current, startBound, endBound) =>
  (startBound && current < startBound) || (endBound && endBound < current);

export const radioItemWithIntl = (item, index, type) => (
  <Radio value={item.value} key={index}>
    {intl.formatMessage({
      id: `payroll.${type}.${item.title}`,
    })}
  </Radio>
);

export const radioItem = (item, index) => (
  <Radio value={item.value} key={index}>
    {item.title}
  </Radio>
);

export const onlyNumberAndHyphen = (e) => {
  // allow only hyphen, numbers, ctrl C V A
  if (
    !isShift(e) &&
    (isBackspaceOrDelete(e) ||
      isArrows(e) ||
      isNumber(e) ||
      isCtrlCVA(e) ||
      isHyphen(e))
  ) {
  } else {
    e.preventDefault();
  }
};

export const onlyNumber = (e) => {
  // allow only hyphen, numbers, ctrl C V A
  if (isBackspaceOrDelete(e) || isArrows(e) || isNumber(e) || isCtrlCVA(e)) {
  } else {
    e.preventDefault();
  }
};
