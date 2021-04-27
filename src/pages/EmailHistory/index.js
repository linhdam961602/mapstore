import React from 'react';
import { useIntl } from 'react-intl';
import { PlusCircleOutlined } from '@ant-design/icons';

import { columns, dataSource } from './mockData';
import './styles.scss';

import Button from 'components/BasicComponent/Button';
import Table from 'components/BasicComponent/Table';
import SidebarRight from 'containers/Sidebar/SidebarRight';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import { createTranslatedText } from 'utils/text';

function EmailHistory() {
  const intl = useIntl();
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);
  const getTextInfo = createTranslatedText('information', intl);

  return (
    <div className="mypage">
      <h1 className="titlePage">{getTextSideBarRight('emailHistory')}</h1>
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <Button type="primary" className="register-service-btn">
            <PlusCircleOutlined />
            {getTextInfo('registerService')}
          </Button>

          <div className="email-history">
            <h2>{getTextInfo('emailHistory')}</h2>

            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                defaultPageSize: 5,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15'],
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmailHistory;
