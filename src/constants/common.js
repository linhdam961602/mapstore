export const SYSTEM_TITLE = 'Tinohost';

export const PRIMARY_COLOR = '#2c64f0';

// Network message
export const NETWORK_ERROR = 'Network Error';
export const SUCCESS = 'COM.SUCCESS_IN_SAVE_OR_MODIFY';

// date format
export const FULL_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const DATETIME_NO_SECONDS_FORMAT = 'YYYY-MM-DD HH:mm';
export const ISO_DATE_FORMAT = 'YYYY/MM/DD';
export const NORMAL_DATE_FORMAT = 'YYYY-MM-DD';
export const MONTH_FORMAT = 'YYYY-MM';
export const NORMAL_TIME_FORMAT = 'HH:mm';

export const EXPIRE_IN = 'expire_in';

export const COOKIE = 'JSESSIONID';

// Token
export const ACCESS_TOKEN = 'token';
export const REFRESH_TOKEN = 'refresh_token';

// storage
export const USER_LOGIN_INFO = 'userLoginInfo';
export const USER_SAVED_EMPNO = 'savedEmpNo';
export const LANGUAGE = 'language';

// Accept language header
export const ACCEPT_LANGUAGE_HEADER = {
  VI: 'vi',
  EN: 'en',
};

export const KEY_CODES = {
  KEYCODE_0: 48,
  KEYCODE_9: 57,
  KEYCODE_PAD_0: 96,
  KEYCODE_PAD_9: 105,
  KEYCODE_BACKSPACE: 8,
  KEYCODE_SUBTRACT: 45,
  KEYCODE_DELETE: 46,
  KEYCODE_HYPHEN: 189,
  KEYCODE_LEFT: 37,
  KEYCODE_UP: 38,
  KEYCODE_RIGHT: 39,
  KEYCODE_DOWN: 40,
  KEYCODE_A: 65,
  KEYCODE_C: 67,
  KEYCODE_V: 86,
};

// Regular expression
export const REGEX_PASSWORD = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
export const REGEX_DUPLICATE = /^(?!.*(\w)\1{2,}).+$/;
export const REGEX_EMAIL_FRONT = /(^[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*)$/;
export const REGEX_EMAIL_BACK = /(^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+)$/;
export const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// TODO: update site key
export const RECAPTCHA_SITE_KEY = '6LeQzZEaAAAAAF7YBftua2kmrlNuz3qwVyRiO0Zo';
export const GOOGLE_OAUTH_CLIENT_KEY =
  '380098082846-augssf22mlmhesmgrq74i1jb7nsk1jl8.apps.googleusercontent.com';

// Avatar
export const AVATAR_SIZE_32 = 32;
export const AVATAR_SIZE_48 = 48;

// Table
export const PAGE_SIZE_DEFAULT = 20;
