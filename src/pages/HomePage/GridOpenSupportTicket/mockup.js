import dayjs from 'dayjs';

import { createTranslatedText } from 'utils/text';

const columns = (intl) => {
  const getText = createTranslatedText(
    'mypage.gridOpenSupportTicket.columns',
    intl,
  );
  const getTextCommon = createTranslatedText('common.status', intl);

  return [
    {
      title: getText('id'),
      dataIndex: 'ticket_number',
      key: 'ticket_number',
      sorter: (a, b) => a.ticket_number - b.ticket_number,
    },
    {
      title: getText('subject'),
      dataIndex: 'subject',
      key: 'subject',
      sorter: (a, b) => a.subject.localeCompare(b.subject),
    },
    {
      title: getText('department'),
      dataIndex: 'deptname',
      key: 'deptname',
      sorter: (a, b) => a.deptname.localeCompare(b.deptname),
    },
    {
      title: getText('lastUpdate'),
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
    },
    {
      title: getText('status'),
      dataIndex: 'status_lang',
      key: 'status_lang',
      filters: [
        {
          text: getTextCommon('clientReply'),
          value: 'Client-Reply',
        },
        {
          text: getTextCommon('closed'),
          value: 'Closed',
        },
        {
          text: getTextCommon('inProgress'),
          value: 'In-Progress',
        },
        {
          text: getTextCommon('answered'),
          value: 'Answered',
        },
        {
          text: getTextCommon('open'),
          value: 'Open',
        },
      ],
      onFilter: (value, record) => record.status_lang.indexOf(value) === 0,
      sorter: (a, b) => a.status_lang.localeCompare(b.status_lang),
    },
  ];
};
export { columns };
