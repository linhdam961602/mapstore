import React, { useEffect, useState } from 'react';
// import { useIntl } from 'react-intl';

import { useInjectSaga } from 'redux-injectors';

import { useDispatch, useSelector } from 'react-redux';

import { domainActions, domainSliceName, domainSaga } from '../slices';

import * as domainSelector from '../selector';

import DomainPrice from './DomainPrice';
import SearchBox from './SearchBox';
import ResultDomainList from './ResultDomainList';

// import { createTranslatedText } from 'utils/text';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import '../styles.scss';

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
  // const intl = useIntl();
  const dispatch = useDispatch();
  // const getText = createTranslatedText('mypage.service.domain', intl);
  const [keyword, setKeyword] = useState('');

  useInjectSaga({ key: domainSliceName, saga: domainSaga });

  const listDomainName = useSelector(domainSelector.selectListDomainName);

  useEffect(() => {
    dispatch(domainActions.getListDomainPrice());
  }, [dispatch]);

  const onSearch = (value) => {
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
      <Row gutter={[16, 16]}>
        {listDomainName &&
          Object.keys(listDomainName).map((key) => (
            <Col key={key} xs={24} sm={24} md={12} lg={4} xl={4}>
              <DomainPrice
                domainName={key}
                domainPrice={listDomainName[key].register}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default RegisterDomain;
