import { lazy } from 'react';

import {
  HOME_URI,
  LOGIN_URL,
  REGISTER_URL,
  PROFILE,
  CLOUD_HOSTING,
  FORGOT_URL,
  MY_PAGE_URI,
  REGIST_DOMAIN_URL,
  CHANGE_PASS,
} from 'constants/routes';

export const layoutRoutes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => import('pages/HomePage')),
    isPrivate: false,
  },
  {
    exact: true,
    path: MY_PAGE_URI,
    component: lazy(() => import('pages/MyPage')),
    isPrivate: true,
  },
  {
    exact: true,
    path: PROFILE,
    component: lazy(() => import('pages/PersonalInfomation')),
    isPrivate: true,
  },
  {
    exact: true,
    path: CHANGE_PASS,
    component: lazy(() => import('pages/ChangePass')),
    isPrivate: true,
  },
  {
    exact: true,
    path: CLOUD_HOSTING,
    component: lazy(() => import('pages/Services/CloudHostingPage')),
    isPrivate: false,
  },
  {
    exact: true,
    path: REGIST_DOMAIN_URL,
    component: lazy(() => import('pages/Services/RegisterDomain')),
    isPrivate: false,
  },
];

export const fluidRoutes = [
  {
    exact: true,
    path: REGISTER_URL,
    component: lazy(() => import('pages/RegisterPage')),
    isPrivate: false,
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() => import('pages/LoginPage')),
    isPrivate: false,
  },
  {
    exact: true,
    path: FORGOT_URL,
    component: lazy(() => import('pages/ForgotPassword')),
    isPrivate: false,
  },
];
