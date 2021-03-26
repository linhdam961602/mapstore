import { lazy } from 'react';

import { HOME_URI, LOGIN_URL } from 'constants/routes';

const routes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() => import('pages/auth/LoginPage')),
  },
];

export default routes;
