import React from 'react';
import AntdInput from 'antd/es/input';
import 'antd/es/input/style/css';
import classNames from 'classnames';

import styles from './styles.module.scss';

const { Password, Group } = AntdInput;

const Input = ({ className, ...props }) => {
  const classes = classNames({
    [styles.tino__input]: true,
    [className]: className || '',
  });
  return (
    <AntdInput {...props} className={classes}>
      {props.children}
    </AntdInput>
  );
};

Input.Password = Password;
Input.Group = Group;

export default Input;
