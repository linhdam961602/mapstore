import React from 'react';
import { Tag } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import Radio from 'antd/es/radio';
import Menu from 'antd/es/menu';

import { createTranslatedText } from 'utils/text';
import 'antd/es/radio/style/css';
import 'antd/es/tag/style/css';
import Row from 'components/BasicComponent/Grid/Row';
import Col from 'components/BasicComponent/Grid/Col';
import Input from 'components/BasicComponent/Input';
import Button from 'components/BasicComponent/Button';
import Form from 'components/BasicComponent/Form';
import Dropdown from 'components/BasicComponent/Dropdown';

import './styles.scss';

function TopUp() {
  const intl = useIntl();
  const getText = createTranslatedText('topup', intl);

  const menu = (
    <Menu>
      <Menu.Item key="1">Pay for Momo</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <div className="top-up">
      <p>{getText('info')}</p>
      <Tag color="blue" className="note">
        <p>{getText('note1')}</p>
        <p>{getText('note2')}</p>
      </Tag>
      <Form>
        <Row>
          <Col span={6}>{getText('amountDeposit')}</Col>
          <Col span={8}>
            <Form.Item name="amountDeposit">
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}></Col>
        </Row>

        <Row gutter={[0, 24]}>
          <Col span={6}></Col>
          <Col span={12}>
            <Radio.Group>
              <Radio.Button>100.000</Radio.Button>
              <Radio.Button>200.000</Radio.Button>
              <Radio.Button>500.000</Radio.Button>
              <Radio.Button>1.000.000</Radio.Button>
              <Radio.Button>1.500.000</Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={6}></Col>

          <Col span={6}>{getText('paymentMethods')}</Col>
          <Col span={8}>
            <Dropdown
              className="payment-dropdown"
              name="paymentMethod"
              overlay={menu}
            >
              <Button>
                Pay for Momo <DownOutlined />
              </Button>
            </Dropdown>
          </Col>
          <Col span={10}></Col>

          <Col span={6}></Col>
          <Col>
            <Button className="btn-recharge" type="primary">
              {getText('recharge')}
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default TopUp;
