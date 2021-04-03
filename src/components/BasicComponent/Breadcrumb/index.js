import React from 'react';
import AntdBreadcrumb from 'antd/es/breadcrumb';
import 'antd/es/breadcrumb/style/css';

const { Item } = AntdBreadcrumb;

const Breadcrumb = (props) => {
  const { className, children } = props;

  return (
    <AntdBreadcrumb {...props} className={className}>
      {children}
    </AntdBreadcrumb>
  );
};

Breadcrumb.Item = Item;

export default Breadcrumb;
