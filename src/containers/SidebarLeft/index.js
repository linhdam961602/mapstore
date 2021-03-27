import React, { useState, useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from './Navigation';

import menusData from './menusData';

import Layout from 'components/BasicComponent/Layout';

const { Sider } = Layout;

const MainLayout = () => {
  const intl = useIntl();
  const [collapsed, setCollapsed] = useState(false);
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  const onCollapse = (collapsedValue) => {
    setCollapsed(collapsedValue);
  };

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Navigation menusData={menusDataIntl} />
      </Sider>
    </>
  );
};

export default MainLayout;
