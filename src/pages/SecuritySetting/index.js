import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';

import { columns, dataSource } from './mockData';
import './styles.scss';

import Button from 'components/BasicComponent/Button';
import Tabs from 'components/BasicComponent/Tabs';
import Table from 'components/BasicComponent/Table';

const { TabPane } = Tabs;

function SecuritySetting() {
  return (
    <>
      <Button type="primary" className="register-service-btn">
        <PlusCircleOutlined />
        ĐĂNG KÍ DỊCH VỤ
      </Button>

      <div className="security-setting">
        <h2>CÀI ĐẶT BẢO MẬT</h2>

        <p>
          Vui lòng lựa chọn 1 trong các tác vụ sau, việc này sẽ giúp tài khoản
          của bạn an toàn hơn
        </p>

        <Tabs defaultActiveKey={1}>
          <TabPane tab="Liên kết tài khoản" key="1">
            <p>
              Kết nối tài khoản của bạn với bất kì dịch vụ nào dưới đây để đơn
              giản hóa trải nghiệm đăng nhập của bạn. Chúng tôi chỉ sử dụng
              thông tin này để xác minh tài khoản của bạn và không bao giờ thay
              bạn đăng nhập.
            </p>
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
