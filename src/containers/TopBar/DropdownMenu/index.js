import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import menusData from '../menusData';

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

  return (
    <div className="dropdown-menu">
      <div className={`information ${isLogin ? 'show' : 'hidden'}`}>
        {/* // TODO: Remove when get API user detail */}
        <p className="primary-text">Con Gian Phat Sang</p>
        <p className="secondary-text">danny.thanhtruc@gmail.com</p>
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
