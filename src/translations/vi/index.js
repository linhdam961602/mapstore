import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';
import * as footer from './footer';

const combined = {
  ...common,
  ...auth,
  ...menu,
  ...footer,
};

export default combined;
