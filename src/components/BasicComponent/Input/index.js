import * as React from 'react';
import AntdInput from 'antd/es/input';
import 'antd/es/input/style/css';

const { Password, Group } = AntdInput;

function Input(props) {
  return <AntdInput {...props}>{props.children}</AntdInput>;
}

Input.Password = Password;
Input.Group = Group;

export default Input;
