import { HomeOutlined, CloudServerOutlined } from '@ant-design/icons';

import {
  DOMAIN_URL,
  HOSTING_URL,
  EMAIL_URL,
  VPS_URL,
  SSL_URL,
  LICENSE_URL,
  TINOFONE_URL,
  ELECTRIC_BILL_URL,
  ASSISTANT_URL,
  MY_PAYMENT_URL,
  SUPPORT_URL,
} from 'constants/routes';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('sidebarLeft', intl);

  return [
    {
      key: '',
      path: '/',
      name: getText('myPage'),
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
          path: DOMAIN_URL,
          name: getText('domain'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 4,
          path: HOSTING_URL,
          name: getText('hosting'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 5,
          path: EMAIL_URL,
          name: getText('email'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 6,
          path: VPS_URL,
          name: getText('vps'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 7,
          path: SSL_URL,
          name: getText('ssl'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 8,
          path: LICENSE_URL,
          name: getText('license'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 9,
          path: TINOFONE_URL,
          name: getText('tinoFone'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 10,
          path: ELECTRIC_BILL_URL,
          name: getText('electronicInvoice'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
        {
          key: 11,
          path: ASSISTANT_URL,
          name: getText('assistant'),
          icon: '',
          role: '',
          hideInmenu: false,
        },
      ],
      hideInmenu: false,
    },
    {
      key: '',
      path: MY_PAYMENT_URL,
      name: getText('payment'),
      icon: <HomeOutlined />,
      role: 'user',
      hideInmenu: false,
    },
    {
      key: '',
      path: SUPPORT_URL,
      name: getText('support'),
      icon: <HomeOutlined />,
      role: 'user',
      hideInmenu: false,
    },
  ];
};

export default menusData;
