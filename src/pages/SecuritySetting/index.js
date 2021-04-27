import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';

import { columns, dataSource } from './mockData';
import './styles.scss';

import Button from 'components/BasicComponent/Button';
import Tabs from 'components/BasicComponent/Tabs';
import Table from 'components/BasicComponent/Table';
import { createTranslatedText } from 'utils/text';

const { TabPane } = Tabs;

function SecuritySetting() {
  const intl = useIntl();
  const getText = createTranslatedText('information', intl);

  return (
    <>
      <Button type="primary" className="register-service-btn">
        <PlusCircleOutlined />
        {getText('registerService')}
      </Button>

      <div className="security-setting">
        <h2>{getText('securitySetting')}</h2>

        <p>{getText('chooseSecurity')}</p>

        <Tabs defaultActiveKey={1}>
          <TabPane tab="Liên kết tài khoản" key="1">
            <p>{getText('connectAccount')}</p>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                defaultPageSize: 5,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15'],
              }}
            />
          </TabPane>
          <TabPane tab="Xác thực hai yếu tố" key="2">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Xác thực đăng nhập một lần (SSO)" key="3">
            Content of Tab Pane 1
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default SecuritySetting;
