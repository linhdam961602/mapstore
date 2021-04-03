import React from 'react';

import '../styles.scss';

import Breadcrumb from 'components/BasicComponent/Breadcrumb';

const { Item } = Breadcrumb;

// TODO: Load dynamic history.
const TopCenter = () => (
  <Breadcrumb separator=">">
    <Item>My Page</Item>
    <Item href="">Service</Item>
  </Breadcrumb>
);

export default TopCenter;
