import React from 'react';
import AntdTable from 'antd/es/table';
import 'antd/es/table/style/css';

const { Column, ColumnGroup } = AntdTable;

function Table({ children, ...props }) {
  return <AntdTable {...props}>{children}</AntdTable>;
}

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;

export default Table;
