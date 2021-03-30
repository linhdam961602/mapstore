import React, { forwardRef } from 'react';
import AntdCheckbox from 'antd/es/checkbox';
import 'antd/es/checkbox/style/css';
import classNames from 'classnames';

import styles from './styles.module.scss';

const CheckboxComponent = forwardRef(
  ({ className, children, autoFocus = false, ...props }, ref) => {
    const classes = classNames({
      [styles.tino__checkbox]: true,
      [className]: className,
    });
    return (
      <AntdCheckbox
        {...props}
        ref={ref}
        autoFocus={autoFocus}
        className={classes}
      >
        {children}
      </AntdCheckbox>
    );
  },
);

CheckboxComponent.displayName = 'CheckboxComponent';
CheckboxComponent.Group = AntdCheckbox.Group;

export default CheckboxComponent;
