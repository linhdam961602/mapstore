import * as React from 'react';
import AntdButton from 'antd/es/button';
import 'antd/es/button/style/css';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ className, ...props }) => {
  const classes = classNames({
    [styles.tino__button]: true,
    [className]: className || '',
  });

  return (
    <AntdButton {...props} className={classes}>
      {props.children}
    </AntdButton>
  );
};

export default Button;
