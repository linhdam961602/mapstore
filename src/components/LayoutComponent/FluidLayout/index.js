import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import './styles.scss';

import logo from 'assets/logo/logo-tinohost.png';
import LanguageSelector from 'containers/TopBar/LanguageSelector';

const FluidLayout = ({ title, children }) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={title} />
    </Helmet>

    <div className="fluid__container">
      <div className="fluid__lang">
        <LanguageSelector />
      </div>
      <div className="fluid__content">
        <div className="fluid__top">
          <div className="fluid__header">
            <Link to="/">
              <img alt="logo" className="fluid__logo" src={logo} />
            </Link>
          </div>
        </div>
        {children}
      </div>
      {/* <DefaultFooter /> */}
    </div>
  </HelmetProvider>
);

export default FluidLayout;
