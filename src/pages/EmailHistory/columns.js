import { createTranslatedText } from 'utils/text';

export const dataSource = [
  {
    key: '1',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '2',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '3',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '4',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '5',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '6',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '7',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '8',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '9',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
  {
    key: '10',
    dtSend: '04/08/2020 (23:16)',
    title: '[TinoHost] V/v Thông báo việc làm tại nhà',
  },
];

export const columns = (intl) => {
  const getText = createTranslatedText('mypage.emailHistory.columns', intl);
  return [
    {
      title: getText('date'),
      dataIndex: 'dtSend',
      key: 'date',
    },
    {
      title: getText('title'),
      dataIndex: 'title',
      key: 'title',
    },
  ];
};
