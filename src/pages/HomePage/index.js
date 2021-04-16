import React from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import './styles.scss';

const HomePage = () => {
  const intl = useIntl();
  const getText = createTranslatedText('sidebarLeft', intl);

  return <div>{getText('homePage')}</div>;
};

export default HomePage;
