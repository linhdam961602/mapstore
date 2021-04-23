import {
  LOGIN_API_URL,
  CLIENT_INFO_API_URL,
  LOGOUT_API_URL,
} from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const login = (payload) =>
  apiClient
    .post(LOGIN_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });

export const logout = () =>
  apiClient
    .post(LOGOUT_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });

export const getUserInfo = () =>
  apiClient
    .get(CLIENT_INFO_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });
