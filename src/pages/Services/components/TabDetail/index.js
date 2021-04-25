import React from 'react';
import { Helmet } from 'react-helmet';

import ProductList from 'components/BasicComponent/ProductList';

const TabDetail = ({ tabName, products }) => (
  <div className="cloudHostingPage">
    <Helmet>
      <meta charSet="utf-8" />
      <title>{tabName}</title>
      <meta name={tabName} content={tabName} />
    </Helmet>

    <h1 className="titlePage">{tabName}</h1>

    <ProductList products={products} />
  </div>
);

export default TabDetail;
