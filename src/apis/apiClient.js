import axios from 'axios';

import { NETWORK_ERROR } from 'constants/common';
import { BASE_API_URL, API_TIMEOUT } from 'constants/appConfig';

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
  (config) => config,
  (error) => {
    Promise.reject(error);
  },
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => {
    const { headers, data } = response;
    const { messageCode } = data;
    const messageContent = unescape(data.messageContent);

    if (data.isSuccess) {
      return { headers, data, messageCode, messageContent };
    }

    throw { messageContent, messageCode };
  },
  (error) => {
    if (error.response) {
      const { status } = error.response;

      if (status >= 400 && status <= 499) {
        return Promise.reject({
          messageContent: {
            id: 'common.error.resourceNotFound',
          },
        });
      }

      if (status >= 500 && status <= 599) {
        return Promise.reject({
          messageContent: {
            id: 'common.error.internalServerError',
          },
        });
      }

      if (error.message === NETWORK_ERROR) {
        return Promise.reject({
          messageContent: {
            id: 'common.error.networkError',
          },
        });
      }

      return Promise.reject(error);
    }
  },
);

export { downloadClient, multipartConfig };

export default apiClient;
