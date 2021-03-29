import { LOGIN_API_URL, REGISTER_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const login = (payload) =>
  apiClient
    .post(LOGIN_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });

export const signup = (payload) =>
  apiClient
    .post(REGISTER_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });
