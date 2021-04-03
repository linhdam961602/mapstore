import { createTranslatedText } from 'utils/text';

// TODO: remove when use API.
const dataSource = [
  {
    key: 1,
    id: '1',
    invoiceDate: '01/01/2021',
    dateDue: '01/01/2021',
    total: '200.000đ',
    balance: '200.000đ',
    status: 'Kích hoạt',
  },
];

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
      dataIndex: 'invoiceDate',
      key: 'invoiceDate',
    },
    {
      title: getText('dateDue'),
      dataIndex: 'dateDue',
      key: 'dateDue',
    },
    {
      title: getText('total'),
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: getText('balance'),
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: getText('status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];
};
export { dataSource, columns };
