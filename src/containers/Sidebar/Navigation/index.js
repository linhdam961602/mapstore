import React from 'react';
import classNames from 'classnames';

import { Link } from 'react-router-dom';

import Menu from 'components/BasicComponent/Menu';

const { SubMenu } = Menu;

const Navigation = ({
  className,
  children: navChildren,
  activeMenu = null,
  theme = 'light',
  ...props
}) => {
  const classes = classNames({
    navigation: true,
    [className]: className,
  });

  const getNavMenuItems = (menusData) => {
    if (!menusData) {
      return [];
    }

    return menusData
      .filter((item) => item.name && !item.hideInMenu)
      .map((item) => {
        const { children, path, target, name, icon, key } = item;
        if (children && children.some((child) => child.name)) {
          // If have children item, callback getNavMenuItems
          const childrenItems = getNavMenuItems(children);
          // The menu is not displayed when there is no submenu
          if (childrenItems && childrenItems.length > 0) {
            const ItemChildDom = (
              <SubMenu
                title={
                  icon ? (
                    <span>
                      {icon}
                      <span>{name}</span>
                    </span>
                  ) : (
                    name
                  )
                }
                key={key}
              >
                {childrenItems}
              </SubMenu>
            );
            return ItemChildDom;
          }
          return null;
        }

        const itemDom = (
          <Menu.Item key={path}>
            <Link to={path} target={target}>
              {icon}
              <span>{name}</span>
            </Link>
          </Menu.Item>
        );
        return itemDom;
      })
      .filter((item) => item);
  };

  const { menusData } = props;
  return (
    <Menu
      key="Menu"
      theme={theme}
      mode="inline"
      className={classes}
      selectedKeys={activeMenu ? [activeMenu] : []}
    >
      {navChildren}
      {getNavMenuItems(menusData)}
    </Menu>
  );
};

export default Navigation;
