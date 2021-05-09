import { stringify } from 'querystring';

import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import './styles.scss';

import NotficationRing from './NotficationRing';
import AvatarUser from './AvatarUser';
import TopCenter from './TopCenter';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

import Layout from 'components/BasicComponent/Layout';

import { useAuth } from 'hooks/useAuth';
import { LOGIN_URL, REGISTER_URL } from 'constants/routes';
import Button from 'components/BasicComponent/Button';
import { createTranslatedText } from 'utils/text';
import history from 'utils/history';

const { Header } = Layout;

const TopBar = () => {
  const { isAuthenticated } = useAuth();
  const intl = useIntl();
  const getText = createTranslatedText('dropdownMenu', intl);

  return (
    <>
      <Header className="topBar">
        <MobileMenu
          isAuthenticated={isAuthenticated}
          intl={intl}
          getText={getText}
        />
        <div className="top-right-wrapper">
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
                    search: stringify({
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
