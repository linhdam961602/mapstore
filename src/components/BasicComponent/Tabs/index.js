import React from 'react';
import AntdTabs from 'antd/es/tabs';

import 'antd/es/tabs/style/css';

function Tabs({ ...props }) {
  return <AntdTabs {...props} />;
}

Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
