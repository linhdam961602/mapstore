import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';
import * as footer from './footer';
import * as mypage from './mypage';
import * as services from './services';
import * as information from './information';

const combined = {
  ...common,
  ...auth,
  ...menu,
  ...footer,
  ...mypage,
  ...services,
  ...information,
};

export default combined;
