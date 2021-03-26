import { lazy } from 'react';

import { HOME_URI, SIGN_IN_URI } from 'constants/routes';

const routes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
  },
  {
    exact: true,
    path: SIGN_IN_URI,
    component: lazy(() => import('pages/Auth/LoginPage')),
  },
];

export default routes;
