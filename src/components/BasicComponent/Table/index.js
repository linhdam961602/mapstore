import React from 'react';
import AntdTable from 'antd/es/table';
import 'antd/es/table/style/css';

const { Column, ColumnGroup } = AntdTable;

function Table({ children, size = 'small', ...props }) {
  return (
    <AntdTable {...props} size={size}>
      {children}
    </AntdTable>
  );
}

Table.Column = Column;
Table.ColumnGroup = ColumnGroup;

export default Table;
