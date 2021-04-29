/* eslint-disable react/display-name */
import { createTranslatedText } from 'utils/text';

import Button from 'components/BasicComponent/Button';

export const columns = (intl) => {
  const getText = createTranslatedText('mypage.securitySetting.columns', intl);
  return [
    {
      title: getText('supplier'),
      dataIndex: 'supplier',
      key: 'supplier',
    },
    {
      title: getText('name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: getText('email'),
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: getText('action'),
      dataIndex: 'action',
      key: 'action',
      render: () => <Button>{getText('removeLink')}</Button>,
    },
  ];
};

export const dataSource = [
  {
    key: '1',
    supplier: 'Google',
    name: 'Hoang Phuc',
    email: 'hoangphucvn@gmail.com',
    manipulation: 'Gỡ bỏ liên kết',
  },
];
