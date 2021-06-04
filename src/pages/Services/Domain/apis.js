import {
  DOMAIN_SALE_API_URL,
  CHECK_DOMAIN_AVAILABILITY,
} from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getListDomainExtension = () =>
  apiClient
    .get(DOMAIN_SALE_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });

export const chechDomainAvailability = (payload) =>
  apiClient
    .post(CHECK_DOMAIN_AVAILABILITY, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
