import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';
import * as footer from './footer';
import * as mypage from './mypage';

const combined = {
  ...common,
  ...auth,
  ...menu,
  ...footer,
  ...mypage,
};

export default combined;
