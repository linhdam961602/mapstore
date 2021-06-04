/* eslint-disable react/no-danger */
import React from 'react';
import { useIntl } from 'react-intl';
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

import '../../styles.scss';

const CheckResultSearch = (props) => {
  const { domainName, isAvaiable } = props;
  const intl = useIntl();
  const getTextDomain = createTranslatedText('services.domain', intl);
  const idIntl = isAvaiable ? 'availableStatus' : 'unAvailableStatus';
  const translated = getTextDomain(idIntl, {
    domain: `<strong>${domainName}</strong>`,
  });
  return (
    <div className={`status ${isAvaiable ? 'available' : 'unAvailable'}`}>
      {isAvaiable ? <CheckCircleOutlined /> : <CloseCircleOutlined />}
      <div dangerouslySetInnerHTML={{ __html: translated }} />
    </div>
  );
};

export default CheckResultSearch;
