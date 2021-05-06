import React, { forwardRef } from 'react';
import AntdCheckbox from 'antd/es/checkbox';
import 'antd/es/checkbox/style/css';

const CheckboxComponent = forwardRef(
  ({ children, autoFocus = false, ...props }, ref) => (
    <AntdCheckbox {...props} ref={ref} autoFocus={autoFocus}>
      {children}
    </AntdCheckbox>
  ),
);

CheckboxComponent.displayName = 'CheckboxComponent';
CheckboxComponent.Group = AntdCheckbox.Group;

export default CheckboxComponent;
