import React from 'react';
import { useIntl } from 'react-intl';
import { CloseCircleOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';

import '../../styles.scss';

const ExistResultSearch = (props) => {
  const { domainName } = props;
  const intl = useIntl();
  const getTextDomain = createTranslatedText('services.domain', intl);
  return (
    <div className="exist-result-search-wrapper">
      <CloseCircleOutlined />
      <p>
        Tên miền <strong>{domainName}</strong> đã có người đăng ký !
      </p>
    </div>
  );
};

export default ExistResultSearch;
