import React from 'react';

import Col from '../Grid/Col';
import Row from '../Grid/Row';

import ProductItem from './Item';

const ProductList = ({ products }) => (
  <div className="products">
    <Row gutter={[16, 16]}>
      {products.map((info) => (
        <Col xl={8} md={12} xs={24} key={info.name}>
          <ProductItem value={info.id} {...info} />
        </Col>
      ))}
    </Row>
  </div>
);

export default ProductList;
