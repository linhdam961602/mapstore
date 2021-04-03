import { HomeOutlined, CloudServerOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('mypage.dropdownMenu', intl);

  return [
    {
      key: 1,
      path: '',
      name: getText('persionnalInfo'),
      icon: <HomeOutlined />,
      hideInmenu: false,
    },
    {
      key: 2,
      path: '',
      name: getText('emailHistory'),
      icon: <CloudServerOutlined />,
      hideInmenu: false,
    },
    {
      key: 3,
      path: '',
      name: getText('emailHistory'),
      icon: <CloudServerOutlined />,
      hideInmenu: false,
    },
    {
      key: 4,
      path: '',
      name: getText('changePass'),
      icon: <CloudServerOutlined />,
      hideInmenu: false,
    },
    {
      key: 5,
      path: '',
      name: getText('securitySetting'),
      icon: <CloudServerOutlined />,
      hideInmenu: false,
    },
    {
      key: 6,
      path: '',
      name: getText('logout'),
      icon: <CloudServerOutlined />,
      hideInmenu: false,
    },
  ];
};

export default menusData;
