import React from 'react';
import AntdTable from 'antd/es/table';
import 'antd/es/table/style/css';
import classNames from 'classnames';

import './styles.scss';

const { Column, ColumnGroup } = AntdTable;

function Table({ className, children, ...props }) {
  const classes = classNames({
    tino__table: true,
    [className]: className,
  });
  return (
    <AntdTable className={classes} {...props}>
      {children}
    </AntdTable>
  );
}

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;

export default Table;
