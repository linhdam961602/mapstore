import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { PhoneOutlined, UserOutlined } from '@ant-design/icons';

import * as authSelector from 'pages/LoginPage/selector';

import { createTranslatedText } from 'utils/text';

import '../styles.scss';
import AvatarUser from 'containers/Sidebar/SidebarRight/AvatarUser';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

const UserBasicInfo = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage', intl);
  const userInfo = useSelector(authSelector.selectUserInfo);

  return (
    <div className="userBaicInfo group-wrapper">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <AvatarUser />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className="group-info">
            <p className="info">
              <PhoneOutlined />
              <span>{userInfo?.phonenumber}</span>
            </p>
            <p className="info">
              <UserOutlined />
              <span>{userInfo?.address1}</span>
            </p>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <div className="group-info">
            <p className="info bold">{getText('wallet')}</p>
            {/* TODO: Waiting API */}
            <p className="info">0.00 VND</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserBasicInfo;
