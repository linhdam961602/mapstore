import React, { useEffect, useState } from 'react';
// import { useIntl } from 'react-intl';

import { useInjectSaga } from 'redux-injectors';

import { useDispatch, useSelector } from 'react-redux';

import { domainActions, domainSliceName, domainSaga } from '../slices';

import * as domainSelector from '../selector';

import DomainPrice from './DomainPrice';
import SearchBox from './SearchBox';
import ResultDomainList from './ResultDomainList';
import ExistResultSearch from './ExistResultSearch';
import AvailableResultSearch from './AvailableResultSearch';

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
  const domainAvailability = useSelector(
    domainSelector.selectDomainAvailability,
  );

  useEffect(() => {
    dispatch(domainActions.getListDomainPrice());
  }, [dispatch]);

  const onSearch = (value) => {
    setKeyword(value);
    // dispatch(domainActions.getDomainAvailability());
  };

  return (
    <div className="registDomain">
      <h1 className="title-page">Domain</h1>
      <SearchBox onSearch={onSearch} />
      {keyword && (
        <>
          {domainAvailability ? (
            <AvailableResultSearch domainName="test" />
          ) : (
            <ExistResultSearch domainName="test" />
          )}
        </>
      )}
      <ResultDomainList dataSource={mockData} />
      <div className="group-wrapper domain-price-wrapper">
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="domain-price-header">Domain Price</div>
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
    </div>
  );
};

export default RegisterDomain;
