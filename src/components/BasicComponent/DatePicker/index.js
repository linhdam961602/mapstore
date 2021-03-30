import React, { forwardRef } from 'react';
import AntdDatePicker from 'antd/es/date-picker';
import 'antd/es/date-picker/style/css';
import 'dayjs/locale/ko';
import localeVN from 'antd/es/date-picker/locale/vi_VN';
import classNames from 'classnames';

import styles from './styles.module.scss';

import { NORMAL_DATE_FORMAT } from 'constants/common';

const DatePicker = ({ className, format, ...rest }, ref) => {
  const classes = classNames({
    [styles.tino__datepicker]: true,
    [className]: className || '',
  });
  return (
    <AntdDatePicker
      locale={localeVN}
      format={format || NORMAL_DATE_FORMAT}
      className={classes}
      {...rest}
      ref={ref}
    />
  );
};

export default forwardRef(DatePicker);
