import { UserOutlined } from '@ant-design/icons';

import { PROFILE } from 'constants/routes';
import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('dropdownMenu', intl);

  return [
    {
      key: 1,
      path: PROFILE,
      name: getText('profile'),
      icon: <UserOutlined />,
    },
  ];
};

export default menusData;
