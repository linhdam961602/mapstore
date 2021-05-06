import * as React from 'react';
import AntdButton from 'antd/es/button';
import 'antd/es/button/style/css';

const Button = ({ ...props }) => (
  <AntdButton {...props}>{props.children}</AntdButton>
);

export default Button;
