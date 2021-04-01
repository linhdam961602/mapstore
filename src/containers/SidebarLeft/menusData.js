import { HomeOutlined, CloudServerOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('menu', intl);

  return [
    {
      key: 1,
      path: '/',
      name: getText('homePage'),
      icon: <HomeOutlined />,
      role: 'user',
      hideInmenu: false,
    },
    {
      key: 2,
      name: getText('service'),
      icon: <CloudServerOutlined />,
      role: 'admin',
      children: [
        {
          key: 3,
          path: '/all-service',
          name: getText('viewAll'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
      ],
      hideInmenu: false,
    },
  ];
};

export default menusData;
