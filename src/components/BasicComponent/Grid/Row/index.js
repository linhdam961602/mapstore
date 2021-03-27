import React from 'react';
import AntdRow from 'antd/es/row';
import 'antd/es/row/style/css';

const Row = ({ children, ...props }) => (
  <AntdRow {...props}>{children}</AntdRow>
);

export default Row;
