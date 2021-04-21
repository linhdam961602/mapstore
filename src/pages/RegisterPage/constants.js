import { TYPES_OF_SUBJECT } from 'constants/options';

export const REGISTER_FORM_FIELDS = {
  TYPE: 'type',
  FIRST_NAME: 'firstname',
  LAST_NAME: 'lastname',
  PHONE: 'phonenumber',
  CALLING_CODE: 'country-calling-code-phonenumber',
  EMAIL: 'email',
  BIRTHDAY: 'birthday',
  NATIONAL_ID: 'nationalid',
  COMPANY_NAME: 'companyname',
  TAX_ID: 'taxid',
  ADDRESS_1: 'address1',
  CITY: 'city',
  STATE: 'state',
  COUNTRY: 'country',
  PASSWORD: 'password',
  PASSWORD_2: 'password2',
  CURRENCY: 'currency',

  // TODO: update later
  PERSONAL_TITLE: 'title',
  HOW_TO_FIND: 'howToFind',
  AGREEMENT: 'agreement',
  RECAPTCHA: 'recaptcha',
};

export const TERMS_OF_SERVICE_URL =
  'https://tinohost.com/dieu-khoan-su-dung-dich-vu/';

export const INITIAL_VALUES = {
  [REGISTER_FORM_FIELDS.TYPE]: TYPES_OF_SUBJECT()?.PERSONAL?.value,
  [REGISTER_FORM_FIELDS.FIRST_NAME]: '',
  [REGISTER_FORM_FIELDS.LAST_NAME]: '',
  [REGISTER_FORM_FIELDS.CALLING_CODE]: '+84',
  [REGISTER_FORM_FIELDS.PHONE]: '',
  [REGISTER_FORM_FIELDS.EMAIL]: '',
  [REGISTER_FORM_FIELDS.BIRTHDAY]: '',
  [REGISTER_FORM_FIELDS.NATIONAL_ID]: '',
  [REGISTER_FORM_FIELDS.COMPANY_NAME]: '',
  [REGISTER_FORM_FIELDS.TAX_ID]: '',
  [REGISTER_FORM_FIELDS.ADDRESS_1]: '',
  [REGISTER_FORM_FIELDS.CITY]: '',
  [REGISTER_FORM_FIELDS.STATE]: '',
  [REGISTER_FORM_FIELDS.COUNTRY]: '',
  [REGISTER_FORM_FIELDS.PASSWORD]: '',
  [REGISTER_FORM_FIELDS.CURRENCY]: 'VND',
  [REGISTER_FORM_FIELDS.AGREEMENT]: true,
};
