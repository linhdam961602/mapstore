import axios from 'axios';

import { DVHCVN_JSON_URL, REST_COUNTRIES_API_URL } from 'constants/apiUrl';

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
