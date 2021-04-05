import { createSelector } from 'reselect';

import { userSliceName } from './slices';

const userStore = (store) => store[userSliceName];

export const selectContactPrivileges = createSelector(
  userStore,
  (state) => state.contactPrivileges,
);
