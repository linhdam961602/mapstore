import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons';

import menusData from '../menusData';

import * as authSelector from 'pages/LoginPage/selector';
import Menu from 'components/BasicComponent/Menu';
import { createTranslatedText } from 'utils/text';
import { authActions } from 'pages/LoginPage/slices';
import { useAuth } from 'hooks/useAuth';

import '../styles.scss';

const { Item } = Menu;

const DropdownMenu = () => {
  const { isAuthenticated } = useAuth();
  const intl = useIntl();
  const dispatch = useDispatch();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);
  const getText = createTranslatedText('dropdownMenu', intl);
  const userInfo = useSelector(authSelector.selectUserInfo);

  const onLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);

  return (
    <div className="dropdown-menu">
      <div className={`information ${isAuthenticated ? 'show' : 'hidden'}`}>
        <p className="primary-text">{`${userInfo?.firstname} ${userInfo?.lastname}`}</p>
        <p className="secondary-text">{userInfo?.email}</p>
      </div>
      {menusDataIntl.map((item) => {
        const { key, path, name, icon, target } = item;
        return (
          <Menu key={key} className="group-top-menu">
            <Item key={path}>
              <Link to={path} target={target}>
                {icon}
                <span>{name}</span>
              </Link>
            </Item>
          </Menu>
        );
      })}
      <Menu>
        <Item>
          <a role="button" onClick={onLogout} tabIndex={0}>
            <LogoutOutlined /> {getText('logout')}
          </a>
        </Item>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
