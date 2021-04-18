import React from 'react';
import AntdList from 'antd/es/list';
import 'antd/es/list/style/css';

import './styles.scss';

const { Item } = AntdList;

const List = (props) => {
  const { className, children } = props;

  return (
    <AntdList {...props} className={className}>
      {children}
    </AntdList>
  );
};

List.Item = Item;

export default List;
