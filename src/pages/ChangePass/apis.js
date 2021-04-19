import { RESET_PASSWORD_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const resetPassword = (payload) =>
  apiClient
    .post(RESET_PASSWORD_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
