import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';
import * as footer from './footer';
import * as mypage from './mypage';
import * as services from './services';
import * as mypayment from './mypayment';

const combined = {
  ...common,
  ...auth,
  ...menu,
  ...footer,
  ...mypage,
  ...services,
  ...mypayment,
};

export default combined;
