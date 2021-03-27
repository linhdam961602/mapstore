import axios from 'axios';

import { ACCEPT_LANGUAGE_HEADER } from 'constants/common';
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

export { downloadClient, multipartConfig };

export default apiClient;
