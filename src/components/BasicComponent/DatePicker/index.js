import React, { forwardRef } from 'react';
import AntdDatePicker from 'antd/es/date-picker';
import classNames from 'classnames';
import localeVN from 'antd/es/date-picker/locale/vi_VN';
import localeEN from 'antd/es/date-picker/locale/en_US';
import 'antd/es/date-picker/style/css';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';

import './styles.scss';

import { NORMAL_DATE_FORMAT } from 'constants/common';

const DatePicker = (
  { className, format = NORMAL_DATE_FORMAT, locale = 'vi', value, ...rest },
  ref,
) => {
  const classes = classNames({
    tino__datepicker: true,
    [className]: className,
  });

  return (
    <AntdDatePicker
      locale={locale === 'vi' ? localeVN : localeEN}
      format={format}
      className={classes}
      {...rest}
      ref={ref}
    />
  );
};

export default forwardRef(DatePicker);
