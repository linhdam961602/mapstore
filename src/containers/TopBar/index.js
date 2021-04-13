import React from 'react';

import './styles.scss';

import NotficationRing from './NotficationRing';
import AvatarUser from './AvatarUser';
import TopCenter from './TopCenter';
import LanguageSelector from './LanguageSelector';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Layout from 'components/BasicComponent/Layout';
import Image from 'components/BasicComponent/Image';
import logo from 'assets/logo/logo.png';

const { Header } = Layout;

const TopBar = () => (
  <>
    <Header className="topBar">
      <Row>
        <Col xs={24} sm={24} md={4} lg={4} xl={4}>
          <Image width={100} src={logo} preview={false} />
        </Col>
        <Col xs={24} sm={24} md={20} lg={20} xl={20}>
          <div className="top-right-wrapper">
            <div className="breadcrumb">
              <TopCenter />
            </div>
            <div className="user-info">
              <div className="language__container">
                <LanguageSelector />
              </div>
              <NotficationRing />
              <AvatarUser />
            </div>
          </div>
        </Col>
      </Row>
    </Header>
  </>
);

export default TopBar;
