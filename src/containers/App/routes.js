import pMinDelay from 'p-min-delay';

import { lazy } from 'utils/component';
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
  EMAIL_HISTORY,
  SECURITY_SETTING,
  VPS_URL,
  NOT_FOUND,
  MY_PAYMENT_URL,
  TOP_UP_URL,
} from 'constants/routes';
import { COMPONENT_IMPORTING_DELAY_MS } from 'constants/common';

export const layoutRoutes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() =>
      pMinDelay(import('pages/HomePage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: MY_PAGE_URI,
    component: lazy(() =>
      pMinDelay(import('pages/MyPage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: PROFILE,
    component: lazy(() =>
      pMinDelay(
        import('pages/PersonalInfomation'),
        COMPONENT_IMPORTING_DELAY_MS,
      ),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: CHANGE_PASS,
    component: lazy(() =>
      pMinDelay(import('pages/ChangePass'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: CONTACT_LIST,
    component: lazy(() =>
      pMinDelay(import('pages/ContactList'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: HOSTING_URL,
    component: lazy(() =>
      pMinDelay(
        import('pages/Services/HostingPage'),
        COMPONENT_IMPORTING_DELAY_MS,
      ),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: VPS_URL,
    component: lazy(() =>
      pMinDelay(import('pages/Services/VPSPage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: REGIST_DOMAIN_URL,
    component: lazy(() =>
      pMinDelay(
        import('pages/Services/Domain/RegistDomain'),
        COMPONENT_IMPORTING_DELAY_MS,
      ),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: EMAIL_HISTORY,
    component: lazy(() =>
      pMinDelay(import('pages/EmailHistory'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: SECURITY_SETTING,
    component: lazy(() =>
      pMinDelay(import('pages/SecuritySetting'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: MY_PAYMENT_URL,
    component: lazy(() =>
      pMinDelay(import('pages/MyPayment'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
  {
    exact: true,
    path: TOP_UP_URL,
    component: lazy(() =>
      pMinDelay(import('pages/TopUp'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: true,
  },
];

export const fluidRoutes = [
  {
    exact: true,
    path: REGISTER_URL,
    component: lazy(() =>
      pMinDelay(import('pages/RegisterPage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() =>
      pMinDelay(import('pages/LoginPage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: FORGOT_URL,
    component: lazy(() =>
      pMinDelay(import('pages/ForgotPassword'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: NOT_FOUND,
    component: lazy(() =>
      pMinDelay(import('pages/NotFoundPage'), COMPONENT_IMPORTING_DELAY_MS),
    ),
    isPrivate: false,
  },
];
