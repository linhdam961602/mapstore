import { UserOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('dropdownMenu', intl);

  return [
    {
      key: 1,
      path: '/profile',
      name: getText('profile'),
      icon: <UserOutlined />,
    },
  ];
};

export default menusData;
