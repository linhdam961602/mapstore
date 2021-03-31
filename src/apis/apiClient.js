import axios from 'axios';
import clone from 'lodash/clone';

import { REQUEST_HEADER_COOKIE } from './constants';

import * as auth from 'utils/authHelper';

import { BASE_API_URL, API_TIMEOUT } from 'constants/appConfig';
import { LOGIN_API_URL, REGISTER_API_URL } from 'constants/apiUrl';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    iso_code: 'VN',
  },
});

const downloadClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  responseType: 'blob',
});

const multipartConfig = {
  headers: {
    'content-type': 'multipart/form-data',
  },
};

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
  (axiosConfig) => {
    const config = clone(axiosConfig);
    if (
      config.url &&
      config.url.indexOf(LOGIN_API_URL) !== -1 &&
      config.url.indexOf(REGISTER_API_URL) !== -1
    ) {
      // Don't pass token with public API
      return config;
    }
    const token = auth.getAccessToken();
    if (token) {
      config.headers[REQUEST_HEADER_COOKIE] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // if (status >= 400 && status <= 499) {
      //   return Promise.reject({
      //     messageContent: {
      //       id: 'common.error.resourceNotFound',
      //     },
      //   });
      // }

      // if (status >= 500 && status <= 599) {
      //   return Promise.reject({
      //     messageContent: {
      //       id: 'common.error.internalServerError',
      //     },
      //   });
      // }

      // if (error.message === NETWORK_ERROR) {
      //   return Promise.reject({
      //     messageContent: {
      //       id: 'common.error.networkError',
      //     },
      //   });
      // }

      return Promise.reject(error);
    }
  },
);

export { downloadClient, multipartConfig };

export default apiClient;
