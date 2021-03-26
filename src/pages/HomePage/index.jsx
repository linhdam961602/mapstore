import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import './styles.scss';

const HomePage = () => {
  const intl = useIntl();
  const getText = createTranslatedText('common.title', intl);

  return (
    <div className="home">
      <p>{getText('template')}</p>
    </div>
  );
};

export default HomePage;
