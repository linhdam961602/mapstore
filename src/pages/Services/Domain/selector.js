import { createSelector } from 'reselect';

import { domainSliceName } from './slices';

const domainStore = (store) => store[domainSliceName];

export const selectLoadingListDomainExtension = createSelector(
  domainStore,
  (state) => state?.isLoadingListDomainExtension,
);

export const selectListDomainExtension = createSelector(
  domainStore,
  (state) => state?.listDomainExtension?.tlds,
);

export const selectLoadingDomainAvailability = createSelector(
  domainStore,
  (state) => state?.isLoadingDomainAvailability,
);
export const selectDomainAvailability = createSelector(
  domainStore,
  (state) => state?.domainAvailability?.available,
);
