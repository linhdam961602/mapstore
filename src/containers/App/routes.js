import { lazy } from 'react';

import {
  HOME_URI,
  LOGIN_URL,
  REGISTER_URL,
  PROFILE,
  FORGOT_URL,
  MY_PAGE_URI,
  REGIST_DOMAIN_URL,
  CHANGE_PASS,
  CONTACT_LIST,
  HOSTING_URL,
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
    path: CONTACT_LIST,
    component: lazy(() => import('pages/ContactList')),
    isPrivate: true,
  },
  {
    exact: true,
    path: HOSTING_URL,
    component: lazy(() => import('pages/Services/HostingPage')),
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
