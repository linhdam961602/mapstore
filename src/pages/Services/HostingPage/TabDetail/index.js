import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Form from 'antd/es/form';
import Radio from 'antd/es/radio';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import 'antd/es/radio/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';
import get from 'lodash/get';

import { createTranslatedText } from 'utils/text';
import ProductItem from 'components/BasicComponent/ProductItem';
import {
  initialState,
  serviceActions,
  serviceSliceName,
} from 'pages/Services/slices';

const TabDetail = ({ tabId, tabName }) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const getText = createTranslatedText('services', intl);

  const handleSelectPeriod = () => {};

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const products = useSelector(
    (state) =>
      get(state, [serviceSliceName, 'products'], initialState.products),
    shallowEqual,
  );

  useEffect(() => {
    // categoryId
    dispatch(serviceActions.fetchProductsByCategory(tabId));
  }, [tabId, dispatch]);

  return (
    <div className="mypage cloudHostingPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{tabName}</title>
        <meta name="cloud hosting" content="Cloud Hosting" />
      </Helmet>

      <h1 className="titlePage">{getText('cloudHosting')}</h1>

      <Form>
        <Radio.Group className="products" value={value} onChange={onChange}>
          <Row gutter={[16, 16]}>
            {products.map((info) => (
              <Col xl={8} md={12} xs={24} key={info.name}>
                <ProductItem
                  onSelectPeriod={handleSelectPeriod}
                  value={info.id}
                  {...info}
                />
              </Col>
            ))}
          </Row>
        </Radio.Group>
      </Form>
    </div>
  );
};

export default TabDetail;
