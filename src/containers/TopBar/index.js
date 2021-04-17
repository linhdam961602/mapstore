import React from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import './styles.scss';

import NotficationRing from './NotficationRing';
import AvatarUser from './AvatarUser';
import TopCenter from './TopCenter';
import LanguageSelector from './LanguageSelector';
import MobileMenu from './MobileMenu';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Layout from 'components/BasicComponent/Layout';
import Image from 'components/BasicComponent/Image';
import logo from 'assets/logo/tino-logo.svg';

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
        <Row>
          <Col xs={24} sm={24} md={4} lg={4} xl={4} className="desktop-only">
            <Image width={100} src={logo} preview={false} />
          </Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20}>
            <div className="top-right-wrapper">
              <div className="breadcrumb">
                <TopCenter />
              </div>
              <div className="user-info">
                <div className="language__container desktop-only">
                  <LanguageSelector />
                </div>
                {isAuthenticated ? (
                  <>
                    <NotficationRing />
                    <AvatarUser />
                  </>
                ) : (
                  <div className="button__container desktop-only">
                    <Link to={LOGIN_URL}>{getText('login')}</Link>
                    <Button onClick={() => history.push(REGISTER_URL)}>
                      {getText('signup')}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default TopBar;
