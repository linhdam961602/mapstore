import * as common from './common';
import * as auth from './auth';
import * as menu from './menu';

const combined = {
  ...common,
  ...auth,
  ...menu,
};

export default combined;
