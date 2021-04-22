import { LIST_CATEGORY_API_URL, PRODUCT_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getCategoryList = (payload) =>
  apiClient
    .get(LIST_CATEGORY_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });

export const getProductByCategory = (id) =>
  apiClient
    .get(PRODUCT_API_URL.replace(':id', id))
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
