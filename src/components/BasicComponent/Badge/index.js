import React from 'react';
import AntdBadge from 'antd/es/badge';
import 'antd/es/badge/style/css';

function Badge({ ...props }) {
  return <AntdBadge {...props}></AntdBadge>;
}

export default Badge;
