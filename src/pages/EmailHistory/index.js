import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { columns, dataSource } from './columns';

import Table from 'components/BasicComponent/Table';
import SidebarRight from 'containers/Sidebar/SidebarRight';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import { createTranslatedText } from 'utils/text';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

import 'styles/common.scss';

function EmailHistory() {
  const intl = useIntl();
  const columnsIntl = useMemo(() => columns(intl), [intl]);
  const getTextSideBarRight = createTranslatedText('sidebarRight', intl);

  return (
    <div className="my-infor-page">
      <Row gutter={20}>
        <Col md={24} lg={6} xl={6}>
          <SidebarRight />
        </Col>
        <Col md={24} lg={18} xl={18}>
          <div className="my-infor-page-content">
            <div className="group-wrapper">
              <p className="title">{getTextSideBarRight('emailHistory')}</p>
              <Table
                columns={columnsIntl}
                dataSource={dataSource}
                pagination={
                  dataSource?.length > PAGE_SIZE_DEFAULT
                    ? { pageSize: PAGE_SIZE_DEFAULT }
                    : false
                }
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmailHistory;
