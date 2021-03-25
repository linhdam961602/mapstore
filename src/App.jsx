/* eslint-disable react/react-in-jsx-scope */
import { createTranslatedText } from 'utils/text';
import { useIntl } from 'react-intl';

const App = () => {
  const intl = useIntl();
  const getText = createTranslatedText('common.title', intl);

  return <p>{getText('template')}</p>;
};

export default App;
