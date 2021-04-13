import { FORGOT_PASSWORD_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const forgotPassword = (payload) =>
  apiClient
    .post(FORGOT_PASSWORD_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });
