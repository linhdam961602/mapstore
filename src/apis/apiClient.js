import axios from 'axios';
import { ResponseHeader } from 'models/ResponseHeaderModel';

import unescape from 'lodash/unescape';

import { ACCEPT_LANGUAGE_HEADER, NETWORK_ERROR } from 'constants/common';
import { BASE_API_URL, API_TIMEOUT } from 'constants/appConfig';

const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Accept-Language': ACCEPT_LANGUAGE_HEADER.KO,
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
    const resHeader = ResponseHeader.toClass(data.responseHeadVo);
    // Use `unescape` Convert HTML entities
    const messageContent = unescape(resHeader.messageContents);
    const { messageCode } = resHeader;
    if (resHeader.isSuccess) {
      return { headers, data, messageContent, messageCode };
    }
    // The message will translate from BE, so we will throw message content here
    throw { messageContent, messageCode };
  },
  // error converter
  (error) => {
    if (error.response) {
      const { status } = error.response;
      if (status >= 400 && status <= 499) {
        return Promise.reject({
          messageContent: {
            id: 'error.api.resourceNotFound',
          },
        });
      }
      if (status >= 500 && status <= 599) {
        return Promise.reject({
          messageContent: {
            id: 'error.api.internalServerError',
          },
        });
      }
    } else if (error.message === NETWORK_ERROR) {
      return Promise.reject({
        messageContent: {
          id: 'error.api.networkError',
        },
      });
    } else {
      return Promise.reject(error);
    }
  },
);

export { downloadClient, multipartConfig };

export default apiClient;
