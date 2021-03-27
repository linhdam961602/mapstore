import React from 'react';
import AntdCol from 'antd/es/grid/col';

const Col = ({ className, children, ...restProps }) => (
  <AntdCol className={className} {...restProps}>
    {children}
  </AntdCol>
);

export default Col;
