import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import { columns, dataSource } from './mockData';
import './styles.scss';

import Button from 'components/BasicComponent/Button';
import Table from 'components/BasicComponent/Table';

function EmailHistory() {
  return (
    <>
      <Button type="primary" className="register-service-btn">
        <PlusCircleOutlined />
        ĐĂNG KÍ DỊCH VỤ
      </Button>

      <div className="email-history">
        <h2>NHẬT KÝ EMAIL</h2>

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
    </>
  );
}

export default EmailHistory;
