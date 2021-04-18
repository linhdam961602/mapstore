import React, { useState } from 'react';
import { useIntl } from 'react-intl';

import DomainPrice from './DomainPrice';
import SearchBox from './SearchBox';
import ResultDomainList from './ResultDomainList';

import { createTranslatedText } from 'utils/text';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import './styles.scss';

// TODO: Remove when integrate API
const mockData = [
  {
    domainName: 'tinotest1.com',
    price: 199000,
  },
  {
    domainName: 'tinotest2.com',
    price: 199000,
  },
  {
    domainName: 'tinotest3.com',
    price: 199000,
  },
  {
    domainName: 'tinotest1.com',
    price: 199000,
  },
  {
    domainName: 'tinotest2.com',
    price: 199000,
  },
  {
    domainName: 'tinotest1.com',
    price: 199000,
  },
  {
    domainName: 'tinotest2.com',
    price: 199000,
  },
  {
    domainName: 'tinotest3.com',
    price: 199000,
  },
  {
    domainName: 'tinotest1.com',
    price: 199000,
  },
  {
    domainName: 'tinotest2.com',
    price: 199000,
  },
];

const RegisterDomain = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage.service.domain', intl);
  const [keyword, setKeyword] = useState('');

  const onSearch = (value) => {
    // eslint-disable-next-line no-console
    console.log(value, getText(''));
    setKeyword(value);
  };

  return (
    <div className="registDomain">
      <h1 className="titlePage">Domain</h1>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <SearchBox onSearch={onSearch} />
        </Col>
      </Row>
      {keyword && (
        <>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <div className="result-search line-block">
                Result for: <span>{keyword}</span>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <ResultDomainList dataSource={mockData} />
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <div className="domain-price-header line-block">Domain Price</div>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          {/* TODO: List domain price is waiting to confirm use API or hardcode */}
          <DomainPrice domainName=".company" domainPrice={380000} />
        </Col>
      </Row>
    </div>
  );
};

export default RegisterDomain;
