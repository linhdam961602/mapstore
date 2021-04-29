import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { columns, dataSource } from './columns';
import './styles.scss';

import Tabs from 'components/BasicComponent/Tabs';
import Table from 'components/BasicComponent/Table';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';

import SidebarRight from 'containers/Sidebar/SidebarRight';

import { createTranslatedText } from 'utils/text';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

const { TabPane } = Tabs;

function SecuritySetting() {
  const intl = useIntl();
  const columnsIntl = useMemo(() => columns(intl), [intl]);
  const getText = createTranslatedText('mypage.securitySetting', intl);
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);

  return (
    <div className="security-setting-page">
      <h1 className="titlePage">{getTextSideBarRight('securitySetting')}</h1>
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <div className="security-setting">
            <div className="form-group">
              <p>{getText('chooseSecurity')}</p>

              <Tabs defaultActiveKey={1}>
                <TabPane tab={getText('connectAccountTab')} key="1">
                  <p>{getText('connectAccount')}</p>
                  <Table
                    columns={columnsIntl}
                    dataSource={dataSource}
                    pagination={
                      dataSource?.lenght > 0
                        ? { pageSize: PAGE_SIZE_DEFAULT }
                        : false
                    }
                  />
                </TabPane>
                <TabPane tab={getText('twoAuthenTab')} key="2">
                  Content of Tab Pane 1
                </TabPane>
                <TabPane tab={getText('oneAuthenTab')} key="3">
                  Content of Tab Pane 1
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SecuritySetting;
