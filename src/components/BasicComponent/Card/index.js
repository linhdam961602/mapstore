import React from 'react';
import AntdCard from 'antd/es/card';
import 'antd/es/card/style/css';

function Card({ children, ...props }) {
  return <AntdCard {...props}>{children}</AntdCard>;
}

export default Card;
