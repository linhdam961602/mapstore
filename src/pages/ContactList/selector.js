/* eslint-disable prefer-template */
import { createSelector } from 'reselect';

import { contactSliceName } from './slices';

const contactStore = (store) => store[contactSliceName];

export const selectListContactDropdown = createSelector(
  contactStore,
  (state) => {
    const { listContact } = state;
    const listDropdown = [];
    listContact?.contacts?.map((item) => {
      listDropdown.push({
        value: item.id,
        label: item.firstname + ' ' + item.lastname + ' - ' + item.email,
      });
      return item;
    });
    return listDropdown;
  },
);

export const selectContactDetail = createSelector(
  contactStore,
  (state) => state?.contactDetail?.contact,
);
