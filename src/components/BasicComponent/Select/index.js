import * as React from 'react';
import AntdSelect from 'antd/es/select';
import 'antd/es/select/style/css';

const { Option } = AntdSelect;

function Select(props) {
  return <AntdSelect {...props}>{props.children}</AntdSelect>;
}

Select.Option = Option;

export default Select;
