import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import menusData from './menusData';

import './styles.scss';

import MenuDesktop from './MenuDesktop';

import MenuMobile from './MenuMobile';

import { useAuth } from 'hooks/useAuth';
import useWindowDimensions from 'hooks/useWindowDimensions';

const SidebarLeft = (props) => {
  const { collapsed, onToggle } = props;
  const intl = useIntl();
  const { isAuthenticated } = useAuth();
  const menusDataIntl = useMemo(() => menusData(intl, isAuthenticated), [
    intl,
    isAuthenticated,
  ]);
  const { width } = useWindowDimensions();
  if (width < 442) {
    return (
      <MenuMobile
        menusDataIntl={menusDataIntl}
        collapsed={collapsed}
        menusData={menusData}
        onToggle={onToggle}
      />
    );
  }
  return (
    <MenuDesktop
      menusDataIntl={menusDataIntl}
      collapsed={collapsed}
      menusData={menusData}
    />
  );
};

export default SidebarLeft;
