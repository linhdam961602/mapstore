import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { useSelector } from 'react-redux';

import menusData from '../menusData';

import * as authSelector from 'pages/LoginPage/selector';

import Menu from 'components/BasicComponent/Menu';

import '../styles.scss';

const { Item } = Menu;

const DropdownMenu = () => {
  const isLogin = true;
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);
  const userInfo = useSelector(authSelector.selectUserInfo);

  return (
    <div className="dropdown-menu">
      <div className={`information ${isLogin ? 'show' : 'hidden'}`}>
        {/* // TODO: Remove when get API user detail */}
        <p className="primary-text">{`${userInfo?.firstname} ${userInfo?.lastname}`}</p>
        <p className="secondary-text">{userInfo?.email}</p>
      </div>
      {menusDataIntl.map((item) => {
        const { key, path, name } = item;
        return (
          <Menu key={key}>
            <Item>
              <a href={path}>{name}</a>
            </Item>
          </Menu>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
