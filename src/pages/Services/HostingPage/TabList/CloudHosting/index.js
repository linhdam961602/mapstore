import React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import {
  DatabaseOutlined,
  UserOutlined,
  DownOutlined,
} from '@ant-design/icons';
import Tag from 'antd/es/tag';
import Form from 'antd/es/form';
import Radio from 'antd/es/radio';
import Checkbox from 'antd/es/checkbox';
import Button from 'antd/es/button';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import Menu from 'antd/es/menu';
import Dropdown from 'antd/es/dropdown';
import Input from 'antd/es/input';
import 'antd/es/menu/style/css';
import 'antd/es/input/style/css';
import 'antd/es/dropdown/style/css';
import 'antd/es/tag/style/css';
import 'antd/es/checkbox/style/css';
import 'antd/es/radio/style/css';
import 'antd/es/button/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';

import './styles.scss';
// import { cloudHostingData } from './mockData';

import vps from 'assets/icon/icon_vps.svg';
import infoIcon from 'assets/icon/icon_information-button.svg';
import backArrow from 'assets/icon/icon_back-arrow.svg';
import { createTranslatedText } from 'utils/text';
// import ProductItem from 'components/BasicComponent/ProductItem';

const CloudHostingBusiness = () => {
  const intl = useIntl();
  const getText = createTranslatedText('services', intl);

  // const handleMenuClick = () => {};

  // const [value, setValue] = useState(1);

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="mypage cloudHostingPage">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cloud Hosting</title>
        <meta name="cloud hosting" content="Cloud Hosting" />
      </Helmet>

      <h1 className="titlePage">{getText('cloudHosting')}</h1>

      <div>
        <div className="titleHasTag">
          <h4 className="subTitle">SETUP YOUR SERVER WITHIN MINUTES </h4>
          <Tag color="#f50">Free 7-day trial, 30-day returned</Tag>
        </div>
      </div>

      <Form>
        <div className="radioGroup">
          <Radio.Group defaultValue="vpsPro" buttonStyle="solid">
            <Radio.Button value="vpsPro">
              <DatabaseOutlined /> VPS PRO
            </Radio.Button>
            <Radio.Button value="vpsLite">
              <DatabaseOutlined /> VPS LITE
            </Radio.Button>
            <Radio.Button value="vpsWindow">
              <DatabaseOutlined /> VPS WINDOW
            </Radio.Button>
            <Radio.Button value="dedicated">
              <DatabaseOutlined /> DEDICATED
            </Radio.Button>
            <Radio.Button value="coloCations">
              <DatabaseOutlined /> COLOCATIONS
            </Radio.Button>
          </Radio.Group>
        </div>

        <div className="step">
          <div className="stepDesc">
            <div className="stepDesc__title">
              <span className="numberStep">
                <span className="numberStep__bg"> </span>
                <span className="numberStep__nb"> 1 </span>
              </span>
              SELECT PRODUCT
            </div>
          </div>

          {/* <Radio.Group className="products" value={value} onChange={onChange}>
            <Row gutter={[16, 16]}>
              {cloudHostingData.map((info) => (
                <Col xl={8} md={12} xs={24} key={info.name}>
                  <ProductItem
                    handleMenuClick={handleMenuClick}
                    value={info.id}
                    info={info}
                  />
                </Col>
              ))}
            </Row>
          </Radio.Group> */}

          <div className="stepDesc">
            <div className="stepDesc__title">
              <span className="numberStep">
                <span className="numberStep__bg"> </span>
                <span className="numberStep__nb"> 2 </span>
              </span>
              CONFIGURATION
            </div>
          </div>

          <div className="configurationInfo">
            <div className="configurationInfo__note">
              <img
                src={infoIcon}
                alt="information icon"
                className="info-icon"
              />
              Configure the options you desire and continue paying
            </div>

            <div className="configurationInfo__desc">
              <div className="capacity">
                <div className="capacity__vps">
                  <h4 className="capacity__title">VPS 20 GB SSD </h4>
                  <img src={vps} alt="vps" className="vps-icon" />
                </div>
                <div className="capacity__package">
                  <Radio.Group className="packages">
                    <Radio className="packages__info" value="1month">
                      <div className="packages__time"> 1 month </div>
                      <div className="packages__price-price">
                        179,000đ/ month
                      </div>
                    </Radio>
                    <Radio
                      className="packages__info packages__info--sale"
                      value="12month"
                    >
                      <div className="packages__sale-percent">
                        Save <div className="percent"> 12% </div>
                      </div>
                      <div className="packages__time">12 month </div>
                      <div className="packages__price">139,000đ/ month </div>
                      <div className="packages__sale-price">
                        209,000đ/ month
                      </div>
                    </Radio>
                    <Radio
                      className="packages__info packages__info--sale"
                      value="24month"
                    >
                      <div className="packages__time">24 month </div>
                      <div className="packages__price">129,000đ/ month </div>
                      <div className="packages__sale-price">
                        199,000đ/ month
                      </div>
                      <div className="packages__sale-percent">
                        Save
                        <div className="percent"> 16% </div>
                      </div>
                    </Radio>
                    <Radio
                      className="packages__info packages__info--sale"
                      value="36month"
                    >
                      <div className="packages__time">36 month </div>
                      <div className="packages__price">125,000đ/ month </div>
                      <div className="packages__sale-price">
                        199,000đ/ month
                      </div>
                      <div className="packages__sale-percent">
                        Save <div className="percent"> 16% </div>
                      </div>
                    </Radio>
                  </Radio.Group>
                  <div className="capacity__btn">
                    <Button className="capacity__view">
                      <img
                        src={backArrow}
                        alt="view billing cycle"
                        className="view-icon"
                      />
                      View Billing Cycle
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="configurationInfo__security">
              <Checkbox.Group defaultValue="cloudLinux" className="security">
                <Row>
                  <Col span={24}>
                    <Checkbox value="cloudLinux" className="security__checkbox">
                      <p>
                        Bảo mật chống local attack, phân chia resources trên vps
                        bằng
                        <strong> CloudLinux</strong>
                      </p>
                      <p>
                        <strong>Giá chỉ 189,000đ 1 tháng</strong>
                      </p>
                    </Checkbox>
                  </Col>

                  <Col span={24}>
                    <Checkbox
                      value="cloudLinuxCPanel"
                      className="security__checkbox"
                    >
                      <p>
                        Bảo mật chống local attack, phân chia resources trên vps
                        bằng
                        <strong> CloudLinux </strong> cho cPanel
                      </p>
                      <p>Giá chỉ 239,000đ 1 tháng</p>
                    </Checkbox>
                  </Col>

                  <Col span={24}>
                    <Checkbox value="cPanel" className="security__checkbox">
                      <p>
                        <strong>cPanel</strong> phần mềm quản lí hosting số 1
                        thế giới
                        <strong>CloudLinux</strong>
                      </p>
                      <p>Giá chỉ 390,000đ 1 tháng</p>
                    </Checkbox>
                  </Col>

                  <Col span={24}>
                    <Checkbox value="vps" className="security__checkbox">
                      <p>
                        <trong>Quản trị vps cơ bản:</trong>
                      </p>
                      <ul>
                        <li>Cài đặt firewall nâng cao, thêm các điều kiện</li>
                        <li>CloudLinux</li>
                      </ul>
                      <p>
                        <trong>Giá chỉ 390,000đ 1 tháng</trong>
                      </p>
                    </Checkbox>
                  </Col>
                </Row>
              </Checkbox.Group>
            </div>
          </div>
        </div>

        <table className="panel">
          <thead>
            <tr>
              <td>IP</td>
              <td>OPERATING SYSTEM 2</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Dropdown overlay={menu}>
                  <Button>
                    1 IP <DownOutlined />
                  </Button>
                </Dropdown>
              </td>
              <td>
                <Dropdown overlay={menu}>
                  <Button>
                    Ubuntu 16 <DownOutlined />
                  </Button>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="panel">
          <thead>
            <tr>
              <td>SSD DISK</td>
              <td>RAM</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Dropdown overlay={menu}>
                  <Button>
                    20 GB (Đã bao gồm) <DownOutlined />
                  </Button>
                </Dropdown>
              </td>
              <td>
                <Dropdown overlay={menu}>
                  <Button>
                    1 GB (Đã bao gồm) <DownOutlined />
                  </Button>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="panel">
          <thead>
            <tr>
              <td colSpan="2">CONTROL PANEL</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                  <Radio value={3}>C</Radio>
                  <Radio value={4}>D</Radio>
                </Radio.Group>
              </td>
              <td>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={5}>A</Radio>
                  <Radio value={6}>B</Radio>
                  <Radio value={7}>C</Radio>
                  <Radio value={8}>D</Radio>
                </Radio.Group>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="panel">
          <thead>
            <tr>
              <td>SUBPRODUCTS</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td--border-bottom">
                <Checkbox value="vps-1024">
                  <p>VPS Pro - VPS 1024</p>
                </Checkbox>
                <div className="time">
                  <Dropdown overlay={menu}>
                    <Button>
                      Theo 1 tháng <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>
              </td>
            </tr>
            <tr>
              <td className="td--border-bottom">
                <Checkbox value="vps-2048">
                  <p>VPS Pro - VPS 2048</p>
                </Checkbox>
              </td>
            </tr>
            <tr>
              <td className="td--border-bottom">
                <Checkbox value="vps-3072">
                  <p>VPS Pro - VPS 3072</p>
                </Checkbox>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="panel">
          <thead>
            <tr>
              <td>DOMAIN</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Dropdown overlay={menu}>
                  <Button>
                    1 IP <DownOutlined />
                  </Button>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </table>

        <table className="panel">
          <thead>
            <tr>
              <td>PROMOTION CODE</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Form layout="inline">
                  <Form.Item name="promotionCode">
                    <Input placeholder="Enter Promotion Code" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </td>
            </tr>
          </tbody>
        </table>
      </Form>
    </div>
  );
};

export default CloudHostingBusiness;
