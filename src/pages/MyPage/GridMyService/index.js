import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { CloudServerOutlined } from '@ant-design/icons';

import * as userSelector from '../selector';

import { columns } from './columns';

import Table from 'components/BasicComponent/Table';
import { createTranslatedText } from 'utils/text';
import '../styles.scss';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

const GridMyService = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage.gridMyService', intl);
  const columnsIntl = useMemo(() => columns(intl), [intl]);

  const listServiceActive = useSelector(userSelector.selectListServiceActive);

  return (
    <div className="customGrid form-group">
      <div className="headingGrid">
        <div className="left-content">
          <CloudServerOutlined />
          <h3>{getText('heading')}</h3>
        </div>
      </div>
      <Table
        dataSource={listServiceActive}
        columns={columnsIntl}
        rowKey="id"
        pagination={
          listServiceActive?.length > PAGE_SIZE_DEFAULT
            ? { pageSize: PAGE_SIZE_DEFAULT }
            : false
        }
      />
    </div>
  );
};

export default GridMyService;
