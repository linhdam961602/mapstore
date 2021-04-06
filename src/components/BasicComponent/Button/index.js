import * as React from 'react';
import AntdButton from 'antd/es/button';
import 'antd/es/button/style/css';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ className, type = 'default', ...props }) => {
  const classes = classNames({
    tino__button: true,
    [className]: className || '',
    [`tino__button--${type}`]: type && type !== 'default',
  });

  return (
    <AntdButton {...props} className={classes}>
      {props.children}
    </AntdButton>
  );
};

export default Button;
