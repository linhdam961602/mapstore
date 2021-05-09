import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from '../Navigation';

import menusData from './menusData';

import './styles.scss';
import AvatarUser from './AvatarUser';

import history from 'utils/history';

const SidebarRight = () => {
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  return (
    <div className="sidebar-right-wrapper">
      <AvatarUser />
      <Navigation
        menusData={menusDataIntl}
        activeMenu={history.location.pathname}
      />
    </div>
  );
};

export default SidebarRight;
