import React from 'react';
import { useIntl } from 'react-intl';
import { CheckCircleOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

import '../../styles.scss';

const AvailableResultSearch = (props) => {
  const { domainName } = props;
  const intl = useIntl();
  const getTextDomain = createTranslatedText('services.domain', intl);
  return (
    <div className="available-result-search-wrapper">
      <CheckCircleOutlined />
      <p>
        Chúc mừng! <strong>{domainName}</strong> có sẵn!
      </p>
    </div>
  );
};

export default AvailableResultSearch;
