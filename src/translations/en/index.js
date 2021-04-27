import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';
import * as footer from './footer';
import * as mypage from './mypage';
import * as information from './information';

const combined = {
  ...common,
  ...auth,
  ...menu,
  ...footer,
  ...mypage,
  ...information,
};

export default combined;
