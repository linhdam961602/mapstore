import React from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import Card from 'components/BasicComponent/Card';

import '../styles.scss';

const DomainPrice = (props) => {
  const intl = useIntl();
  const getText = createTranslatedText('common', intl);
  const { isSale, domainName, domainPrice } = props;
  return (
    <Card className={`card-domain-price ${isSale ? 'sale' : ''}`}>
      <p className="name">{domainName}</p>
      <p className="price">
        {domainPrice} {getText('unit')}
      </p>
    </Card>
  );
};

export default DomainPrice;
