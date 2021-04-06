import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('mypage.dropdownMenu', intl);

  return [
    {
      key: 1,
      path: '/profile',
      name: getText('profile'),
      icon: <UserOutlined />,
    },
    {
      key: 1,
      path: '',
      name: getText('logout'),
      icon: <LogoutOutlined />,
    },
  ];
};

export default menusData;
