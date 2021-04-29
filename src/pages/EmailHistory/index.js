import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { columns, dataSource } from './columns';

import Table from 'components/BasicComponent/Table';
import SidebarRight from 'containers/Sidebar/SidebarRight';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import { createTranslatedText } from 'utils/text';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

import './styles.scss';

function EmailHistory() {
  const intl = useIntl();
  const columnsIntl = useMemo(() => columns(intl), [intl]);
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);

  return (
    <div className="email-history-page">
      <h1 className="titlePage">{getTextSideBarRight('emailHistory')}</h1>
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <div className="form-group">
            <Table
              columns={columnsIntl}
              dataSource={dataSource}
              pagination={
                dataSource?.lenght > 0 ? { pageSize: PAGE_SIZE_DEFAULT } : false
              }
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmailHistory;
