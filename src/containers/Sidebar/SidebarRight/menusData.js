import {
  UserOutlined,
  UsergroupDeleteOutlined,
  SettingOutlined,
  HistoryOutlined,
  LockOutlined,
} from '@ant-design/icons';

import {
  PROFILE,
  CHANGE_PASS,
  CONTACT_LIST,
  EMAIL_HISTORY,
  SECURITY_SETTING,
} from 'constants/routes';

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
      path: SECURITY_SETTING,
      icon: <SettingOutlined />,
    },
    {
      key: 5,
      name: getText('emailHistory'),
      path: EMAIL_HISTORY,
      icon: <HistoryOutlined />,
    },
  ];
};

export default menusData;
