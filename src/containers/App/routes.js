import { lazy } from 'react';

import { HOME_URI, LOGIN_URL, REGISTER_URL } from 'constants/routes';

const routes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() => import('pages/LoginPage')),
  },
  {
    exact: true,
    path: REGISTER_URL,
    component: lazy(() => import('pages/RegisterPage')),
  },
];

export default routes;
