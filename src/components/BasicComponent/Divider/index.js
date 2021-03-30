import * as React from 'react';
import AntdDivider from 'antd/es/divider';
import 'antd/es/divider/style/css';
import classNames from 'classnames';

const Divider = ({ className, ...props }) => {
  const classes = classNames({
    [className]: className || '',
  });
  return (
    <AntdDivider {...props} className={classes}>
      {props.children}
    </AntdDivider>
  );
};

export default Divider;
