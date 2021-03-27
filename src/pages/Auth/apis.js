import { LOGIN_URL } from 'constants/routes';

import apiClient from 'apis/apiClient';

export const login = (payload) =>
  apiClient
    .post(LOGIN_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });
