import React from 'react';
import AntdMenu from 'antd/es/menu';
import 'antd/es/menu/style/css';

const { Item, SubMenu, Divider } = AntdMenu;

const Menu = (props) => {
  const { className, children } = props;

  return (
    <AntdMenu {...props} className={className}>
      {children}
    </AntdMenu>
  );
};

Menu.Item = Item;
Menu.SubMenu = SubMenu;
Menu.Divider = Divider;

export default Menu;
