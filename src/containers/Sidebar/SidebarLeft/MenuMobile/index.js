import React from 'react';

import Navigation from '../../Navigation';

import '../styles.scss';

import Drawer from 'components/BasicComponent/Drawer';
import history from 'utils/history';
import Image from 'components/BasicComponent/Image';
import logo from 'assets/logo/tino-logo.svg';

const MenuMobile = (props) => {
  const { collapsed, onToggle, menusDataIntl } = props;

  return (
    <Drawer
      maskClosable
      visible={!collapsed}
      placement="left"
      className="sidebar-left-drawer-wrapper"
      onClose={onToggle}
    >
      <Image className="logo" src={logo} preview={false} />
      <Navigation
        theme="dark"
        menusData={menusDataIntl}
        activeMenu={history.location.pathname}
      />
    </Drawer>
  );
};

export default MenuMobile;
