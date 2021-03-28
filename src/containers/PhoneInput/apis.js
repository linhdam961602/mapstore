import axios from 'axios';

const REST_COUNTRIES_API_URL = 'https://restcountries.eu/rest/v2/all';

export const getCountryList = () =>
  axios
    .get(REST_COUNTRIES_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);

      throw err;
    });
