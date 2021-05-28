import React, { useMemo, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { columns } from './columns';

import * as userSelector from 'pages/MyPage/selector';
import { userActions, userSaga, userSliceName } from 'pages/MyPage/slices';

import Table from 'components/BasicComponent/Table';
import Tabs from 'components/BasicComponent/Tabs';

import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import { createTranslatedText } from 'utils/text';
import { PAGE_SIZE_DEFAULT } from 'constants/common';
import { useInjectSaga } from 'hooks/useInjector';

const { TabPane } = Tabs;

const MyPayment = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const getTextSidebarLeft = createTranslatedText('sidebarLeft', intl);
  const getTextMyPayment = createTranslatedText('mypayment', intl);
  const columnsIntl = useMemo(() => columns(intl), [intl]);

  useInjectSaga({ key: userSliceName, saga: userSaga });

  const listAllInvoice = useSelector(userSelector.selectListAllInvoice);

  useEffect(() => {
    dispatch(userActions.getListInvoice());
  }, [dispatch]);

  return (
    <div className="customGrid">
      <h1 className="title-page">{getTextSidebarLeft('payment')}</h1>
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}></Col>
      </Row>
      <Tabs defaultActiveKey={1}>
        <TabPane tab={getTextMyPayment('tab.invoice')} key="1">
          <Table
            dataSource={listAllInvoice}
            columns={columnsIntl}
            pagination={
              listAllInvoice?.length > 20
                ? { pageSize: PAGE_SIZE_DEFAULT }
                : false
            }
            rowKey="id"
            rowSelection
          />
        </TabPane>
        <TabPane tab={getTextMyPayment('tab.reCharge')} key="2">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab={getTextMyPayment('tab.eCheck')} key="3">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab={getTextMyPayment('tab.estimates')} key="4">
          Content of Tab Pane 1
        </TabPane>
      </Tabs>
    </div>
  );
};

export default MyPayment;
