import React, { forwardRef } from 'react';
import AntdDatePicker from 'antd/es/date-picker';

import 'antd/es/date-picker/style/css';

import { NORMAL_DATE_FORMAT } from 'constants/common';

const DatePicker = ({ format = NORMAL_DATE_FORMAT, value, ...rest }, ref) => (
  <AntdDatePicker
    format={format}
    {...rest}
    ref={ref}
    style={{ width: '100%' }}
  />
);

export default forwardRef(DatePicker);
