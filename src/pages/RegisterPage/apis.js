import axios from 'axios';

import {
  DVHCVN_JSON_URL,
  REGISTER_API_URL,
  REST_COUNTRIES_API_URL,
} from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const signup = (payload) =>
  apiClient
    .post(REGISTER_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error(err);

      throw err;
    });

export const getCountryList = () =>
  axios
    .get(REST_COUNTRIES_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);

      throw err;
    });

export const getStateCity = () =>
  axios
    .get(DVHCVN_JSON_URL)
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);

      throw err;
    });
