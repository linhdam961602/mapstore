import React from 'react';
import AntdTabs from 'antd/es/tabs';
import classNames from 'classnames';

import 'antd/es/tabs/style/css';

import './styles.scss';

function Tabs({ className, ...props }) {
  const classes = classNames({
    tino__tabs: true,
    [className]: className,
  });
  return <AntdTabs className={classes} {...props} />;
}

Tabs.TabPane = AntdTabs.TabPane;

export default Tabs;
