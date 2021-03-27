import * as React from 'react';
import AntdDivider from 'antd/es/divider';
import 'antd/es/divider/style/css';

const Divider = (props) => (
  <AntdDivider {...props}>{props.children}</AntdDivider>
);

export default Divider;
