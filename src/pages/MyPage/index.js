import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';

import { useDispatch, useSelector } from 'react-redux';

import { userActions, userSaga, userSliceName } from './slices';

import GridInvoceDue from './GridInvoceDue';
import GridOpenSupportTicket from './GridOpenSupportTicket';
import UserBasicInfo from './UserBasicInfo';
import GridMyService from './GridMyService';

import * as userSelector from './selector';

import { createTranslatedText } from 'utils/text';

import Statistic from 'components/BasicComponent/Statistic';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Image from 'components/BasicComponent/Image';

import iconService from 'assets/icon/icon_service.png';
import iconDomain from 'assets/icon/icon_domain.png';
import iconHosting from 'assets/icon/icon_hosting.png';
import iconSupport from 'assets/icon/icon_support.png';

import { useInjectSaga } from 'hooks/useInjector';

import 'styles/common.scss';
import './styles.scss';

const MyPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const getText = createTranslatedText('mypage', intl);
  const getTextTitle = createTranslatedText('sidebarRight', intl);

  useInjectSaga({ key: userSliceName, saga: userSaga });

  const statistic = useSelector(userSelector.selectStatistic);

  useEffect(() => {
    dispatch(userActions.getListServiceActive());
    dispatch(userActions.getListDomain());
    dispatch(userActions.getListInvoice());
    dispatch(userActions.getListTicket());
  }, [dispatch]);

  return (
    <div className="mypage">
      <h1 className="titlePage">{getTextTitle('overView')}</h1>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('service')}
            value={statistic?.serviceActive}
            suffix={<Image width={66} src={iconService} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('domain')}
            value={statistic?.domain}
            suffix={<Image width={66} src={iconDomain} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('invoiceNotPaid')}
            value={statistic?.invoiceUnpaid}
            suffix={<Image width={66} src={iconHosting} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
          <Statistic
            title={getText('support')}
            value={statistic?.ticket}
            suffix={<Image width={66} src={iconSupport} preview={false} />}
            className="statistic-wrapper"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <UserBasicInfo />
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
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
          <GridMyService />
        </Col>
      </Row>
    </div>
  );
};

export default MyPage;
