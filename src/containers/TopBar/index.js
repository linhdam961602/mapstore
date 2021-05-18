import { stringify as queryStringify } from 'querystring';

import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import './styles.scss';

import NotficationRing from './NotficationRing';
import AvatarUser from './AvatarUser';
import TopCenter from './TopCenter';
import LanguageSelector from './LanguageSelector';

import Layout from 'components/BasicComponent/Layout';
import Image from 'components/BasicComponent/Image';

import { useAuth } from 'hooks/useAuth';
import { LOGIN_URL, REGISTER_URL } from 'constants/routes';
import Button from 'components/BasicComponent/Button';
import { createTranslatedText } from 'utils/text';
import history from 'utils/history';
import useWindowDimensions from 'hooks/useWindowDimensions';
import favicon from 'assets/logo/favicon-76.png';

const { Header } = Layout;

const TopBar = (props) => {
  const { onToggle, collapsed } = props;
  const { isAuthenticated } = useAuth();
  const intl = useIntl();
  const getText = createTranslatedText('dropdownMenu', intl);
  const { width } = useWindowDimensions();
  const isMobile = width < 442;

  return (
    <>
      <Header className="topBar site-layout-sub-header-background">
        <div className="top-right-wrapper">
          {isMobile && (
            <div className="logo-moile-wrapper">
              <Image src={favicon} preview={false} />
            </div>
          )}
          <div className={`toggle-sibar-button ${isMobile && 'mobile'}`}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                onClick: onToggle,
              },
            )}
          </div>
          <div className="breadcrumb">
            <TopCenter />
          </div>
          <div className="user-info">
            {isAuthenticated ? (
              <>
                <NotficationRing />
                <AvatarUser />
              </>
            ) : (
              <div className="button__container desktop-only">
                <Link
                  to={{
                    pathname: LOGIN_URL,
                    search: queryStringify({
                      redirect: window.location.href,
                    }),
                  }}
                >
                  {getText('login')}
                </Link>
                <Button onClick={() => history.push(REGISTER_URL)}>
                  {getText('signup')}
                </Button>
              </div>
            )}
            <div className="language-container desktop-only">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </Header>
    </>
  );
};

export default TopBar;
