import dayjs from 'dayjs';

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
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => dayjs(a.date).unix() - dayjs(b.date).unix(),
    },
    {
      title: getText('dateDue'),
      dataIndex: 'duedate',
      key: 'duedate',
      sorter: (a, b) => dayjs(a.duedate).unix() - dayjs(b.duedate).unix(),
    },
    {
      title: getText('total'),
      dataIndex: 'total',
      key: 'total',
      sorter: (a, b) => a.total - b.total,
    },
    {
      title: getText('status'),
      dataIndex: 'status_lang',
      key: 'status_lang',
      sorter: (a, b) => a.status_lang.localeCompare(b.status_lang),
    },
  ];
};
export { columns };
