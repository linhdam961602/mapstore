import { createTranslatedText } from 'utils/text';

const columns = (intl) => {
  const getText = createTranslatedText(
    'mypage.gridOpenSupportTicket.columns',
    intl,
  );

  return [
    {
      title: getText('id'),
      dataIndex: 'ticket_number',
      key: 'ticket_number',
    },
    {
      title: getText('subject'),
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: getText('department'),
      dataIndex: 'deptname',
      key: 'deptname',
    },
    {
      title: getText('lastUpdate'),
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: getText('status'),
      dataIndex: 'status',
      key: 'status',
    },
  ];
};
export { columns };
