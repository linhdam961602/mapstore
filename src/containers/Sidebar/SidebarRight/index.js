import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import Navigation from '../Navigation';

import menusData from './menusData';

import './styles.scss';
import AvatarUser from './AvatarUser';

import Layout from 'components/BasicComponent/Layout';

const { Sider } = Layout;

const SidebarLeft = () => {
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  return (
    <>
      <Sider className="sidebarRight_wrapper">
        <AvatarUser />
        <Navigation menusData={menusDataIntl} />
      </Sider>
    </>
  );
};

export default SidebarLeft;
