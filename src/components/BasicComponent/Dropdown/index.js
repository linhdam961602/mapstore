import React from 'react';
import AntdDropdown from 'antd/es/dropdown';
import 'antd/es/dropdown/style/css';

function Dropdown({
  children,
  placement = 'bottomLeft',
  trigger = ['hover'],
  overlay,
  ...props
}) {
  return (
    <AntdDropdown
      placement={placement}
      overlay={overlay}
      trigger={trigger}
      {...props}
    >
      {children}
    </AntdDropdown>
  );
}

Dropdown.Button = AntdDropdown.Button;

export default Dropdown;
