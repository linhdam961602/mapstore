import {
  UserOutlined,
  UsergroupDeleteOutlined,
  SettingOutlined,
  HistoryOutlined,
  LockOutlined,
} from '@ant-design/icons';

import { PROFILE, CHANGE_PASS, CONTACT_LIST } from 'constants/routes';

import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('sidebarRight', intl);

  return [
    {
      key: 'myInfo',
      path: PROFILE,
      name: getText('myInfo'),
      icon: <UserOutlined />,
    },
    {
      key: 2,
      name: getText('contactList'),
      path: CONTACT_LIST,
      icon: <UsergroupDeleteOutlined />,
    },
    {
      key: 3,
      name: getText('changePass'),
      path: CHANGE_PASS,
      icon: <LockOutlined />,
    },
    {
      key: 4,
      name: getText('securitySetting'),
      path: '/sercurity-setting',
      icon: <SettingOutlined />,
    },
    {
      key: 5,
      name: getText('emailHistory'),
      path: '/email-history',
      icon: <HistoryOutlined />,
    },
  ];
};

export default menusData;
