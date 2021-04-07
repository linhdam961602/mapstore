import { createTranslatedText } from 'utils/text';

const columns = (intl) => {
  const getText = createTranslatedText('mypage.gridInvoceDue.columns', intl);

  return [
    {
      title: getText('id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: getText('invoiceDate'),
      dataIndex: 'dateorig',
      key: 'dateorig',
    },
    {
      title: getText('dateDue'),
      dataIndex: 'duedate',
      key: 'duedate',
    },
    {
      title: getText('total'),
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: getText('balance'),
      dataIndex: 'subtotal',
      key: 'subtotal',
    },
    {
      title: getText('status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];
};
export { columns };
