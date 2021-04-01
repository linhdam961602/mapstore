import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from './Navigation';

import menusData from './menusData';

import './styles.scss';

import Layout from 'components/BasicComponent/Layout';

const { Sider } = Layout;

const MainLayout = () => {
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  return (
    <>
      <Sider className="sidebarLeft_wrapper">
        <Navigation menusData={menusDataIntl} />
      </Sider>
    </>
  );
};

export default MainLayout;
