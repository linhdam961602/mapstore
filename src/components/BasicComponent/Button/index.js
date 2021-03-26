import * as React from 'react';
import AntdButton from 'antd/es/button';
import 'antd/es/button/style/css';

function Button(props) {
  return <AntdButton {...props}>{props.children}</AntdButton>;
}

export default Button;
