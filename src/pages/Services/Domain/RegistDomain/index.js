import React, { useEffect, useState } from 'react';
// import { useIntl } from 'react-intl';

import { useInjectSaga } from 'redux-injectors';

import { useDispatch, useSelector } from 'react-redux';

import { domainActions, domainSliceName, domainSaga } from '../slices';

import * as domainSelector from '../selector';

import DomainPrice from './DomainPrice';
import SearchBox from './SearchBox';
import ResultDomainList from './ResultDomainList';
import CheckResultSearch from './CheckResultSearch';

// import { createTranslatedText } from 'utils/text';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Spinner from 'components/BasicComponent/Spinner';

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

  const listDomainExtension = useSelector(
    domainSelector.selectListDomainExtension,
  );
  const isoadingListDomainExtension = useSelector(
    domainSelector.selectLoadingListDomainExtension,
  );
  const domainAvailability = useSelector(
    domainSelector.selectDomainAvailability,
  );
  const isoadingDomainAvailability = useSelector(
    domainSelector.selectLoadingDomainAvailability,
  );

  useEffect(() => {
    dispatch(domainActions.getListDomainExtension());
  }, [dispatch]);

  const onSearch = (value) => {
    setKeyword(value);
    dispatch(domainActions.getDomainAvailability(value));
  };

  return (
    <div className="regist-domain-page">
      <h1 className="title-page">Domain</h1>
      <SearchBox onSearch={onSearch} />
      <div
        className={`status-search-wrapper group-wrapper ${
          isoadingDomainAvailability ? 'spinning' : ''
        }`}
      >
        {keyword && (
          <Spinner spinning={isoadingDomainAvailability}>
            <CheckResultSearch
              domainName={keyword}
              isAvaiable={domainAvailability}
            />
          </Spinner>
        )}
      </div>
      <ResultDomainList dataSource={mockData} />
      <div
        className={`group-wrapper ${
          isoadingListDomainExtension ? 'spinning' : ''
        } domain-price-wrapper`}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <div className="domain-price-header">Domain Price</div>
          </Col>
        </Row>
        <Spinner spinning={isoadingListDomainExtension}>
          <Row gutter={[16, 16]}>
            {listDomainExtension &&
              Object.keys(listDomainExtension).map((key) => (
                <Col key={key} xs={24} sm={24} md={12} lg={6} xl={4}>
                  <DomainPrice
                    domainName={key}
                    domainPrice={listDomainExtension[key].register}
                  />
                </Col>
              ))}
          </Row>
        </Spinner>
      </div>
    </div>
  );
};

export default RegisterDomain;
