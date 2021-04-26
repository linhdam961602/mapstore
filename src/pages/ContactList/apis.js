import { CONTACT_INFO_API_URL } from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getListContact = () =>
  apiClient
    .get(CONTACT_INFO_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const getContactDetail = (id) =>
  apiClient
    .get(`${CONTACT_INFO_API_URL}/${id}`)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const addContactDetail = (payload) =>
  apiClient
    .post(CONTACT_INFO_API_URL, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const updateContactDetail = (payload) =>
  apiClient
    .put(`${CONTACT_INFO_API_URL}/${payload.id}`, payload)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });
