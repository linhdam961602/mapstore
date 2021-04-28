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
} from 'constants/routes';

export const layoutRoutes = [
  {
    exact: true,
    path: HOME_URI,
    component: lazy(() => pMinDelay(import('pages/HomePage'), 300)),
    isPrivate: false,
  },
  {
    exact: true,
    path: MY_PAGE_URI,
    component: lazy(() => pMinDelay(import('pages/MyPage'), 300)),
    isPrivate: true,
  },
  {
    exact: true,
    path: PROFILE,
    component: lazy(() => pMinDelay(import('pages/PersonalInfomation'), 300)),
    isPrivate: true,
  },
  {
    exact: true,
    path: CHANGE_PASS,
    component: lazy(() => pMinDelay(import('pages/ChangePass'), 300)),
    isPrivate: true,
  },
  {
    exact: true,
    path: CONTACT_LIST,
    component: lazy(() => pMinDelay(import('pages/ContactList'), 300)),
    isPrivate: true,
  },
  {
    exact: true,
    path: HOSTING_URL,
    component: lazy(() => pMinDelay(import('pages/Services/HostingPage'), 300)),
    isPrivate: false,
  },
  {
    exact: true,
    path: VPS_URL,
    component: lazy(() => pMinDelay(import('pages/Services/VPSPage'), 300)),
    isPrivate: false,
  },
  {
    exact: true,
    path: REGIST_DOMAIN_URL,
    component: lazy(() =>
      pMinDelay(import('pages/Services/Domain/RegistDomain'), 300),
    ),
    isPrivate: false,
  },
  {
    exact: true,
    path: EMAIL_HISTORY,
    component: lazy(() => pMinDelay(import('pages/EmailHistory'), 300)),
    isPrivate: true,
  },
  {
    exact: true,
    path: SECURITY_SETTING,
    component: lazy(() => pMinDelay(import('pages/SecuritySetting'), 300)),
    isPrivate: true,
  },
];

export const fluidRoutes = [
  {
    exact: true,
    path: REGISTER_URL,
    component: lazy(() => pMinDelay(import('pages/RegisterPage'), 300)),
    isPrivate: false,
  },
  {
    exact: true,
    path: LOGIN_URL,
    component: lazy(() => pMinDelay(import('pages/LoginPage'), 300)),
    isPrivate: false,
  },
  {
    exact: true,
    path: FORGOT_URL,
    component: lazy(() => pMinDelay(import('pages/ForgotPassword'), 300)),
    isPrivate: false,
  },
];
