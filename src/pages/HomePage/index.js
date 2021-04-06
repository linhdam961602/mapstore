import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import { useDispatch } from 'react-redux';

import { userActions, userSaga, userSliceName } from './slices';

import GridInvoceDue from './GridInvoceDue';
import GridOpenSupportTicket from './GridOpenSupportTicket';

// import * as userSelector from './selector';

import { createTranslatedText } from 'utils/text';

import './styles.scss';
import Statistic from 'components/BasicComponent/Statistic';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Image from 'components/BasicComponent/Image';

import iconService from 'assets/icon/icon_service.png';
import iconDomain from 'assets/icon/icon_domain.png';
import iconHosting from 'assets/icon/icon_hosting.png';
import iconSupport from 'assets/icon/icon_support.png';

import { useInjectSaga } from 'hooks/useInjector';

const HomePage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const getText = createTranslatedText('sidebarRight', intl);

  useInjectSaga({ key: userSliceName, saga: userSaga });

  useEffect(() => {
    dispatch(userActions.getContactPrivileges());
  });

  // TODO: waiting check data API.
  // const contactPrivileges = useSelector(userSelector.selectContactPrivileges);
  // const { services, domains, billing, support } = contactPrivileges;

  return (
    <div className="mypage">
      <h1 className="titlePage">{getText('overView')}</h1>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('service')}
            value={0}
            suffix={<Image width={66} src={iconService} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('domain')}
            value={1}
            suffix={<Image width={66} src={iconDomain} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('invoiceNotPaid')}
            value={2}
            suffix={<Image width={66} src={iconHosting} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('support')}
            value={3}
            suffix={<Image width={66} src={iconSupport} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <GridInvoceDue />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <GridOpenSupportTicket />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
