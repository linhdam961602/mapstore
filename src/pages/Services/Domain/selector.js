import { createSelector } from 'reselect';

import { domainSliceName } from './slices';

const domainStore = (store) => store[domainSliceName];

export const selectListDomainName = createSelector(
  domainStore,
  (state) => state?.listDomainName?.tlds,
);

export const selectDomainAvailability = createSelector(
  domainStore,
  (state) => state?.domainAvailability?.available,
);
