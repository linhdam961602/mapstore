import axios from 'axios';

import { REST_COUNTRIES_API_URL } from 'constants/apiUrl';

export const getCountryList = () =>
  axios
    .get(REST_COUNTRIES_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);

      throw err;
    });
