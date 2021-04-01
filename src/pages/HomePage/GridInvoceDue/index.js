import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { dataSource, columns } from './mockup';

import Image from 'components/BasicComponent/Image';
import Table from 'components/BasicComponent/Table';
import { createTranslatedText } from 'utils/text';
import '../styles.scss';
import iconInvoiceDue from 'assets/icon/icon_invoiceDue.png';

const GridInvoceDue = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage.gridInvoceDue', intl);
  const columnsIntl = useMemo(() => columns(intl), [intl]);

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
      <Table dataSource={dataSource} columns={columnsIntl} pagination={false} />
    </div>
  );
};

export default GridInvoceDue;
