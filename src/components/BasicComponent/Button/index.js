import * as React from 'react';
import AntdButton from 'antd/es/button';
import 'antd/es/button/style/css';
import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ className, type = 'default', ...props }) => {
  const classes = classNames({
    [styles.tino__button]: true,
    [className]: className || '',
    [styles[`tino__button--${type}`]]: type && type !== 'default',
  });

  return (
    <AntdButton {...props} className={classes}>
      {props.children}
    </AntdButton>
  );
};

export default Button;
