import { lazy } from 'react';

import {
  HOME_URI,
  LOGIN_URL,
  REGISTER_URL,
  PROFILE,
  CLOUD_HOSTING,
  FORGOT_URL,
} from 'constants/routes';

export const layoutRoutes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
  },
  {
    exact: true,
    path: PROFILE,
    component: lazy(() => import('pages/PersonalInfomation')),
  },
  {
    exact: true,
    path: CLOUD_HOSTING,
    component: lazy(() => import('pages/Services/CloudHostingPage')),
  },
];

export const publicRoutes = [
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
  {
    exact: true,
    path: FORGOT_URL,
    component: lazy(() => import('pages/ForgotPassword')),
  },
];
