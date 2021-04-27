import { DOMAIN_SALE_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getListDomainPrice = () =>
  apiClient
    .get(DOMAIN_SALE_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
