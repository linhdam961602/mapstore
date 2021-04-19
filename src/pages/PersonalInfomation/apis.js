import { USER_INFO_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const saveContact = (payload) =>
  apiClient
    .put(USER_INFO_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
