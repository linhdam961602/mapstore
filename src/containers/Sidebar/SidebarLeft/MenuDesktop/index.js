import React from 'react';

import Navigation from '../../Navigation';

import '../styles.scss';

import Layout from 'components/BasicComponent/Layout';
import history from 'utils/history';
import Image from 'components/BasicComponent/Image';
import logo from 'assets/logo/tino-logo.svg';
import favicon from 'assets/logo/favicon-76.png';

const { Sider } = Layout;

const MenuDesktop = (props) => {
  const { collapsed, menusDataIntl } = props;

  return (
    <Sider
      breakpoint="lg"
      className="sidebar-left-wrapper"
      collapsed={collapsed}
      trigger={null}
    >
      <Image
        className={`${collapsed ? 'favicon' : 'logo'}`}
        src={collapsed ? favicon : logo}
        preview={false}
      />
      <Navigation
        theme="dark"
        menusData={menusDataIntl}
        activeMenu={history.location.pathname}
      />
    </Sider>
  );
};

export default MenuDesktop;
