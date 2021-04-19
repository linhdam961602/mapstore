import dayjs from 'dayjs';

import { createTranslatedText } from 'utils/text';

const columns = (intl) => {
  const getText = createTranslatedText('mypage.gridMyService.columns', intl);

  return [
    {
      title: getText('id'),
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: getText('category'),
      dataIndex: 'category',
      key: 'category',
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: getText('domain'),
      dataIndex: 'domain',
      key: 'domain',
      sorter: (a, b) => a.domain.localeCompare(b.domain),
    },
    {
      title: getText('name'),
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: getText('nextDue'),
      dataIndex: 'next_due',
      key: 'next_due',
      sorter: (a, b) => dayjs(a.next_due).unix() - dayjs(b.next_due).unix(),
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
