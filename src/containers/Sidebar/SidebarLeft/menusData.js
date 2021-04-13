import { HomeOutlined, CloudServerOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';
import { CLOUD_HOSTING } from 'constants/routes';

const menusData = (intl) => {
  const getText = createTranslatedText('sidebarLeft', intl);

  return [
    {
      key: '',
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
        {
          key: 4,
          path: CLOUD_HOSTING,
          name: getText('cloudHosting'),
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
