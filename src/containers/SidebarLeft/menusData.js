import { createTranslatedText } from 'utils/text';

const menusData = (intl) => {
  const getText = createTranslatedText('menu', intl);

  return [
    {
      key: 1,
      path: '/',
      name: getText('homePage'),
      icon: '',
      role: 'user',
      hideInmenu: false,
    },
    {
      key: 2,
      name: getText('service'),
      icon: '',
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
