import { createSelector } from 'reselect';

import { authSliceName } from 'pages/LoginPage/slices';

const authStore = (store) => store[authSliceName];

export const selectUserInfo = createSelector(
  authStore,
  (state) => state.userInfo,
);
