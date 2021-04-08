import axios from 'axios';
import clone from 'lodash/clone';

import {
  REQUEST_HEADER_ACCEPT_LANGUAGE,
  REQUEST_HEADER_CONTENT_TYPE,
  REQUEST_HEADER_COOKIE,
} from './constants';

import * as auth from 'utils/authHelper';

import { LANGUAGE } from 'constants/common';
import { BASE_API_URL, API_TIMEOUT } from 'constants/appConfig';
import { LOGIN_API_URL, REGISTER_API_URL } from 'constants/apiUrl';
import localStorageService from 'utils/localStorage';
import { DEFAULT_LOCALE } from 'translations/i18n';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    [REQUEST_HEADER_CONTENT_TYPE]: 'application/json;charset=UTF-8',
  },
});

const downloadClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  responseType: 'blob',
});

const multipartConfig = {
  headers: {
    [REQUEST_HEADER_CONTENT_TYPE]: 'multipart/form-data',
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

    const acceptLanguage =
      localStorageService.getItem(LANGUAGE) || DEFAULT_LOCALE;
    if (acceptLanguage) {
      config.headers[REQUEST_HEADER_ACCEPT_LANGUAGE] = acceptLanguage;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.error) {
      throw { messageCodes: data.error };
    }
    return response;
  },
  (error) => {
    if (error.response) {
      const {
        data: { error: errorArray },
      } = error.response;

      if (errorArray) {
        return Promise.reject({
          messageCodes: errorArray,
        });
      }
      return Promise.reject(error);
    }
  },
);

export { downloadClient, multipartConfig };

export default apiClient;
