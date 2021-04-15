import { createSelector } from 'reselect';
import dayjs from 'dayjs';

import { userSliceName } from './slices';

const userStore = (store) => store[userSliceName];

export const selectStatistic = createSelector(userStore, (state) => ({
  serviceActive: state?.listServiceActive?.total,
  domain: state?.listDomain?.total,
  invoiceUnpaid: state?.listInvoice?.total_unpaid,
  ticket: state?.listTicket?.total,
}));

export const selectListInvoiceOverDue = createSelector(userStore, (state) => {
  const { listInvoice } = state;
  return listInvoice?.invoices.filter((item) => {
    const { status, duedate } = item;
    return status === 'Unpaid' && dayjs() > dayjs(duedate);
  });
});

export const selectListAllTicket = createSelector(
  userStore,
  (state) => state.listTicket?.tickets,
);
