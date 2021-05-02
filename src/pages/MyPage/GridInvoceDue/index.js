import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import * as userSelector from '../selector';

import { columns } from './columns';

import Image from 'components/BasicComponent/Image';
import Table from 'components/BasicComponent/Table';
import { createTranslatedText } from 'utils/text';
import '../styles.scss';
import iconInvoiceDue from 'assets/icon/icon_invoiceDue.png';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

const GridInvoceDue = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage.gridInvoceDue', intl);
  const columnsIntl = useMemo(() => columns(intl), [intl]);

  const listInvoiceOverDue = useSelector(userSelector.selectListInvoiceOverDue);

  return (
    <div className="customGrid">
      <div className="headingGrid">
        <div className="left-content">
          <Image width={22} src={iconInvoiceDue} preview={false} />
          <h3>{getText('heading')}</h3>
        </div>
        <a href="" className="link">
          {getText('myInvoice')} {'>'}
        </a>
      </div>
      <Table
        dataSource={listInvoiceOverDue}
        columns={columnsIntl}
        pagination={
          listInvoiceOverDue?.length > 0
            ? { pageSize: PAGE_SIZE_DEFAULT }
            : false
        }
      />
    </div>
  );
};

export default GridInvoceDue;
