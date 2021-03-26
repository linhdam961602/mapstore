/* eslint-disable react/react-in-jsx-scope */
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

const App = () => {
  const intl = useIntl();
  const getText = createTranslatedText('common.title', intl);

  return <p>{getText('template')}</p>;
};

export default App;
