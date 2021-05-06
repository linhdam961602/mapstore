import React from 'react';
import AntdInput from 'antd/es/input';
import 'antd/es/input/style/css';

const { Password, Group, Search } = AntdInput;

const Input = ({ ...props }) => (
  <AntdInput {...props}>{props.children}</AntdInput>
);

Input.Password = Password;
Input.Group = Group;
Input.Search = Search;

export default Input;
