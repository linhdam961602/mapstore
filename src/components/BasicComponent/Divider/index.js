import * as React from 'react';
import AntdDivider from 'antd/es/divider';
import 'antd/es/divider/style/css';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Divider = ({ className, ...props }) => {
  const classes = classNames({
    [styles.tino__divider]: true,
    [className]: className || '',
  });
  return (
    <AntdDivider {...props} className={classes}>
      {props.children}
    </AntdDivider>
  );
};

export default Divider;
