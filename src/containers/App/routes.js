import { lazy } from 'react';

import { HOME_URI, LOGIN_URL, REGISTER_URL } from 'constants/routes';

export const layoutRoutes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
  },
];

export const routes = [
  {
    exact: true,
    path: REGISTER_URL,
    component: lazy(() => import('pages/RegisterPage')),
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() => import('pages/LoginPage')),
  },
];
