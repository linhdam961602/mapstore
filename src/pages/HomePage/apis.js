import { CONTACT_PRIVILEGES_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getContactPrivileges = () =>
  apiClient
    .get(CONTACT_PRIVILEGES_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error Login Error:', err);
      throw err;
    });
