import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import Radio from 'antd/es/radio';
import Checkbox from 'antd/es/checkbox';
import 'antd/es/checkbox/style/css';
import 'antd/es/radio/style/css';
import parse from 'html-react-parser';
import classNames from 'classnames';
import { useIntl } from 'react-intl';

import Dropdown from '../Dropdown';
import Button from '../Button';
import Menu from '../Menu';

import { createTranslatedText } from 'utils/text';

import './styles.scss';

const ProductItem = ({ className, value, handleMenuClick, info }) => {
  const intl = useIntl();
  const getText = createTranslatedText('products', intl);

  const { name, unit, price, contents, favorite = false } = info;
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">12 months = 139,000đ/month</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  const classes = classNames({
    item: true,
    item__favorite: favorite,
    [className]: className,
  });

  return (
    <Radio className={classes} value={value}>
      <div className="item__capacity">{name}</div>
      <div className="item__price">
        <span className="unit">
          {price}
          {unit}
        </span>
        /{getText('labels.month')}
        <div className="ruler"> </div>
      </div>
      <ul className="item__list">
        {contents.map((content) => (
          <li key={content}>
            <Checkbox checked>{parse(content)}</Checkbox>
          </li>
        ))}
      </ul>

      <Dropdown className="item__time" overlay={menu}>
        <Button>
          12 months = 139,000đ/month <DownOutlined />
        </Button>
      </Dropdown>

      <div className="item__btn">
        <Button type="primary">{getText('buttons.order')}</Button>
      </div>
    </Radio>
  );
};

export default ProductItem;
