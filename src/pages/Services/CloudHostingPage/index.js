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
import 'antd/es/tag/style/css';
import 'antd/es/dropdown/style/css';
import 'antd/es/checkbox/style/css';
import 'antd/es/radio/style/css';
import 'antd/es/button/style/css';

import './styles.scss';

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
    <div className="mypage">
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
              Configure the options you desire and continue paying
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default CloudHosting;
