/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import Card from 'components/BasicComponent/Card';

import '../../styles.scss';

const DomainPrice = (props) => {
  const intl = useIntl();
  const getText = createTranslatedText('common', intl);
  const { isSale, domainName, domainPrice } = props;

  useEffect(() => {
    console.log(3333, props);
  });

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
