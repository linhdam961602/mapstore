import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import LanguageSelector from '../LanguageSelector';

import hamburger from 'assets/images/hamburger.svg';
import logo from 'assets/logo/tino-logo.svg';
import Navigation from 'containers/Sidebar/Navigation';
import menusData from 'containers/Sidebar/SidebarLeft/menusData';
import { LOGIN_URL, REGISTER_URL } from 'constants/routes';
import Menu from 'components/BasicComponent/Menu';

import '../styles.scss';

const MobileMenu = ({ intl, isAuthenticated, getText }) => {
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className="mobile__menu mobile-only">
      <div className="mobile__menu--bar">
        <img className="logo" alt="logo" src={logo} />
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setCollapsed(!isCollapsed);
          }}
        >
          <img className="hamburger" alt="hamburger" src={hamburger} />
        </a>
      </div>
      <Navigation
        menusData={menusDataIntl}
        className={classNames('mobile__menu--list', {
          'mobile__menu--list-active': !isCollapsed,
        })}
      >
        <div className="mobile__menu--language">
          <LanguageSelector />
        </div>
        {!isAuthenticated && (
          <>
            <Menu.Item key={LOGIN_URL}>
              <Link to={LOGIN_URL}>
                <span>{getText('login')}</span>
              </Link>
            </Menu.Item>

            <Menu.Item key={REGISTER_URL}>
              <Link to={REGISTER_URL}>
                <span>{getText('signup')}</span>
              </Link>
            </Menu.Item>
          </>
        )}
      </Navigation>
    </div>
  );
};

export default MobileMenu;
