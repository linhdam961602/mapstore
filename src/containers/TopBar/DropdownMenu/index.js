import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import menusData from '../menusData';

import Menu from 'components/BasicComponent/Menu';

import '../styles.scss';

const { Item } = Menu;

const DropdownMenu = () => {
  const isLogin = true;
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

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
    </div>
  );
};

export default DropdownMenu;
