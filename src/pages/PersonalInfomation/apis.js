import { CLIENT_INFO_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const saveClientInformation = (payload) =>
  apiClient
    .put(CLIENT_INFO_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
