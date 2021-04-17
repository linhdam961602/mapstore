import React, { useMemo, useState } from 'react';
import { useIntl } from 'react-intl';
import classNames from 'classnames';

import hamburger from 'assets/images/hamburger.svg';
import mobileLogo from 'assets/images/logo-small.svg';
import Navigation from 'containers/Sidebar/Navigation';
import menusData from 'containers/Sidebar/SidebarLeft/menusData';

import '../styles.scss';

const MobileMenu = () => {
  const intl = useIntl();
  const menusDataIntl = useMemo(() => menusData(intl), [intl]);

  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className="mobile__menu mobile-only">
      <div className="mobile__menu--bar">
        <img className="logo" alt="mobileLogo" src={mobileLogo} />
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
      />
    </div>
  );
};

export default MobileMenu;
