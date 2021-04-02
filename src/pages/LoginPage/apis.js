import {
  LOGIN_API_URL,
  USER_INFO_API_URL,
  LOGOUT_API_URL,
} from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const login = (payload) =>
  apiClient
    .post(LOGIN_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });

export const logout = () =>
  apiClient
    .post(LOGOUT_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });

export const getUserInfo = () =>
  apiClient
    .get(USER_INFO_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);

      throw err;
    });
