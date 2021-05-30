import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import get from 'lodash/get';

import ProductList from 'components/BasicComponent/ProductList';
import { serviceSliceName, initialState } from 'pages/Services/slices';
import Spinner from 'components/BasicComponent/Spinner';

const TabDetail = ({ tabName, products }) => {
  const isFetchingProducts = useSelector((state) =>
    get(
      state,
      [serviceSliceName, 'isFetchingProducts'],
      initialState.isFetchingProducts,
    ),
  );
  return (
    <div className="cloudHostingPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{tabName}</title>
        <meta name={tabName} content={tabName} />
      </Helmet>

      <h1 className="title-page">{tabName}</h1>
      <Spinner spinning={isFetchingProducts}>
        <ProductList products={products} />
      </Spinner>
    </div>
  );
};

export default TabDetail;
