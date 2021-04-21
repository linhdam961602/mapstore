import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';
import { DatabaseOutlined, DownOutlined } from '@ant-design/icons';
import Tag from 'antd/es/tag';
import Form from 'antd/es/form';
import Radio from 'antd/es/radio';
import Checkbox from 'antd/es/checkbox';
import Dropdown from 'antd/es/dropdown';
import Button from 'antd/es/button';
import Menu from 'antd/es/menu';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import 'antd/es/tag/style/css';
import 'antd/es/dropdown/style/css';
import 'antd/es/checkbox/style/css';
import 'antd/es/radio/style/css';
import 'antd/es/button/style/css';
import 'antd/es/row/style/css';
import 'antd/es/col/style/css';

import './styles.scss';

import vps from 'assets/icon/icon_vps.svg';
import infoIcon from 'assets/icon/icon_information-button.svg';
import backArrow from 'assets/icon/icon_back-arrow.svg';
import { createTranslatedText } from 'utils/text';

const CloudHosting = () => {
  const intl = useIntl();
  const getText = createTranslatedText('services', intl);

  const handleMenuClick = () => {};

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

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

          <Radio.Group className="products" value={value} onChange={onChange}>
            <Radio className="item" value="vps20">
              <div className="item__capacity">VPS 20 GB SSD</div>
              <div className="item__price">
                <span className="unit">179,000đ</span>/month
                <div className="ruler"> </div>
              </div>
              <ul className="item__list">
                <li>
                  <Checkbox checked>
                    Dung lượng đĩa <strong> SSD 20GB </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Ram <strong>1GB</strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    CPU <strong> 1 Core </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Băng thông <strong> Không giới hạn </strong>
                  </Checkbox>
                </li>
              </ul>

              <Dropdown className="item__time" overlay={menu}>
                <Button>
                  12 months = 139,000đ/month <DownOutlined />
                </Button>
              </Dropdown>

              <div className="item__btn">
                <Button>Add now</Button>
              </div>
            </Radio>

            <Radio className="item" value="vps30">
              <div className="item__capacity">VPS 30 GB SSD</div>
              <div className="item__price">
                <span className="unit">299,000đ</span>/month
                <div className="ruler"> </div>
              </div>
              <ul className="item__list">
                <li>
                  <Checkbox checked>
                    Dung lượng đĩa <strong> SSD 30GB </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Ram <strong>2GB </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    CPU <strong> 2 Core </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Băng thông <strong> Không giới hạn </strong>
                  </Checkbox>
                </li>
              </ul>

              <Dropdown className="item__time" overlay={menu}>
                <Button>
                  12 months = 279,000đ/month <DownOutlined />
                </Button>
              </Dropdown>

              <div className="item__btn">
                <Button>Add now</Button>
              </div>
            </Radio>

            <Radio className="item" value="vps50">
              <div className="item__capacity">VPS 50 GB SSD</div>
              <div className="item__price">
                <span className="unit">639,000đ</span>/month
                <div className="ruler"> </div>
              </div>
              <ul className="item__list">
                <li>
                  <Checkbox checked>
                    Dung lượng đĩa <strong> SSD 50GB </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Ram<strong> 4GB </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    CPU <strong> 4 Core </strong>
                  </Checkbox>
                </li>
                <li>
                  <Checkbox checked>
                    Băng thông <strong> Không giới hạn </strong>
                  </Checkbox>
                </li>
              </ul>

              <Dropdown className="item__time" overlay={menu}>
                <Button>
                  12 months = 599,000đ/month <DownOutlined />
                </Button>
              </Dropdown>

              <div className="item__btn">
                <Button>Add now</Button>
              </div>
            </Radio>
          </Radio.Group>

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
      </Form>
    </div>
  );
};

export default CloudHosting;
