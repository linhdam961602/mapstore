import React from 'react';
import { useIntl } from 'react-intl';

import { createTranslatedText } from 'utils/text';

import './styles.scss';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import SidebarRight from 'containers/Sidebar/SidebarRight';

const PersonalInfomation = () => {
  const intl = useIntl();
  const getText = createTranslatedText('sidebarRight', intl);

  return (
    <div className="mypage">
      <h1 className="titlePage">{getText('persionnalInfo')}</h1>
      <Row gutter={20}>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          Content
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfomation;
