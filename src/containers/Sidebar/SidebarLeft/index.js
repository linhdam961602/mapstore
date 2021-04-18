import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from '../Navigation';

import menusData from './menusData';

import './styles.scss';

import Layout from 'components/BasicComponent/Layout';
import history from 'utils/history';
import { useAuth } from 'hooks/useAuth';

const { Sider } = Layout;

const SidebarLeft = () => {
  const intl = useIntl();
  const { isAuthenticated } = useAuth();
  const menusDataIntl = useMemo(() => menusData(intl, isAuthenticated), [
    intl,
    isAuthenticated,
  ]);

  return (
    <>
      <Sider className="sidebarLeft_wrapper">
        <Navigation
          menusData={menusDataIntl}
          activeMenu={history.location.pathname}
        />
      </Sider>
    </>
  );
};

export default SidebarLeft;
