import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from '../Navigation';

import menusData from './menusData';

import './styles.scss';

import Layout from 'components/BasicComponent/Layout';
import history from 'utils/history';
import { useAuth } from 'hooks/useAuth';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Image from 'components/BasicComponent/Image';
import logo from 'assets/logo/tino-logo.svg';

const { Sider } = Layout;

const SidebarLeft = () => {
  const intl = useIntl();
  const { isAuthenticated } = useAuth();
  const menusDataIntl = useMemo(() => menusData(intl, isAuthenticated), [
    intl,
    isAuthenticated,
  ]);
  const { width } = useWindowDimensions();

  return (
    <Sider className="sidebarLeft_wrapper" collapsed={width <= 991}>
      <Image src={logo} preview={false} />
      <Navigation
        theme="dark"
        menusData={menusDataIntl}
        activeMenu={history.location.pathname}
      />
    </Sider>
  );
};

export default SidebarLeft;
