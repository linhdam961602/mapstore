import React, { forwardRef } from 'react';
import AntdDatePicker from 'antd/es/date-picker';
import localeVN from 'antd/es/date-picker/locale/vi_VN';
import localeEN from 'antd/es/date-picker/locale/en_US';
import 'antd/es/date-picker/style/css';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';

import { NORMAL_DATE_FORMAT } from 'constants/common';

const DatePicker = (
  { format = NORMAL_DATE_FORMAT, locale = 'vi', value, ...rest },
  ref,
) => (
  <AntdDatePicker
    locale={locale === 'vi' ? localeVN : localeEN}
    format={format}
    {...rest}
    ref={ref}
  />
);

export default forwardRef(DatePicker);
