import React from 'react';
import AntdTooltip from 'antd/es/tooltip';
import 'antd/es/tooltip/style/css';

function Tooltip({ children, placement = 'top', ...props }) {
  return (
    <AntdTooltip placement={placement} {...props}>
      {children}
    </AntdTooltip>
  );
}

export default Tooltip;
