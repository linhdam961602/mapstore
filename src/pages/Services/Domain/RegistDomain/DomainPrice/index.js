/* eslint-disable no-console */
import React from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import Card from 'components/BasicComponent/Card';

import 'styles/common.scss';
import '../../styles.scss';

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
      <span className="icon-sale">Sale</span>
    </Card>
  );
};

export default DomainPrice;
