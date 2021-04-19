import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import * as userSelector from '../selector';

import { columns } from './columns';

import Image from 'components/BasicComponent/Image';
import Table from 'components/BasicComponent/Table';
import { createTranslatedText } from 'utils/text';
import '../styles.scss';
import iconSupportTicket from 'assets/icon/icon_suport_ticket.png';
import { PAGE_SIZE_DEFAULT } from 'constants/common';

const GridOpenSupportTicket = () => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage.gridOpenSupportTicket', intl);
  const columnsIntl = useMemo(() => columns(intl), [intl]);
  const listTicket = useSelector(userSelector.selectListAllTicket);

  return (
    <div className="customGrid">
      <div className="headingGrid">
        <div className="left-content">
          <Image width={22} src={iconSupportTicket} preview={false} />
          <h3>{getText('heading')}</h3>
        </div>
        <a href="" className="link">
          {getText('mySupportTicket')} {'>'}
        </a>
      </div>
      <Table
        dataSource={listTicket}
        columns={columnsIntl}
        pagination={
          listTicket?.lenght > 0 ? { pageSize: PAGE_SIZE_DEFAULT } : false
        }
      />
    </div>
  );
};

export default GridOpenSupportTicket;
