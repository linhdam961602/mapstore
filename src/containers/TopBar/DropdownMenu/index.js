import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIntl } from 'react-intl';

import menusData from '../menusData';

import * as authSelector from 'pages/LoginPage/selector';

import Menu from 'components/BasicComponent/Menu';
import { createTranslatedText } from 'utils/text';

import '../styles.scss';
import { authActions } from 'pages/LoginPage/slices';

const { Item } = Menu;

const DropdownMenu = () => {
  const isLogin = true;
  const intl = useIntl();
  const dispatch = useDispatch();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);
  const getText = createTranslatedText('mypage.dropdownMenu', intl);

  const onLogout = useCallback(() => {
    dispatch(authActions.logout());
  }, [dispatch]);
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
      <Menu>
        <Item>
          <a role="button" onClick={onLogout} tabIndex={0}>
            {getText('logout')}
          </a>
        </Item>
      </Menu>
    </div>
  );
};

export default DropdownMenu;
