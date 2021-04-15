import {
  LIST_SERVICE_ACTIVE_API_URL,
  LIST_DOMAIN_API_URL,
  LIST_INVOICE_API_URL,
  LIST_TICKET_API_URL,
} from 'constants/apiUrl';

import apiClient from 'apis/apiClient';

export const getListServiceActive = () =>
  apiClient
    .get(LIST_SERVICE_ACTIVE_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const getListDomain = () =>
  apiClient
    .get(LIST_DOMAIN_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const getListInvoice = () =>
  apiClient
    .get(LIST_INVOICE_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });

export const getListTicket = () =>
  apiClient
    .get(LIST_TICKET_API_URL)
    .then((response) => response)
    .catch((err) => {
      console.error('Error:', err);
      throw err;
    });
