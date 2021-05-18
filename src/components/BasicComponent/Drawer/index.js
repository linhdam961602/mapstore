import * as React from 'react';
import AntdDrawer from 'antd/es/drawer';
import 'antd/es/drawer/style/css';
import classNames from 'classnames';

const Drawer = ({ className, ...props }) => {
  const classes = classNames({
    [className]: className || '',
  });
  return (
    <AntdDrawer {...props} className={classes}>
      {props.children}
    </AntdDrawer>
  );
};

export default Drawer;
