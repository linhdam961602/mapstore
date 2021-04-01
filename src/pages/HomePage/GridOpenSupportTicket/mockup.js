import { createTranslatedText } from 'utils/text';

// TODO: remove when use API.
const dataSource = [
  {
    id: '1',
    subject: 'Hệ thốn bị chậm',
    department: 'Kỹ thuật',
    lastUpdate: '02/02/2021',
    status: 'Kích hoạt',
  },
];

const columns = (intl) => {
  const getText = createTranslatedText(
    'mypage.gridOpenSupportTicket.columns',
    intl,
  );

  return [
    {
      title: getText('id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: getText('subject'),
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: getText('department'),
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: getText('lastUpdate'),
      dataIndex: 'lastUpdate',
      key: 'lastUpdate',
    },
    {
      title: getText('status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];
};
export { dataSource, columns };
