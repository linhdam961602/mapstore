import React from 'react';
import { useIntl } from 'react-intl';

import { ShoppingCartOutlined } from '@ant-design/icons';

import { createTranslatedText } from 'utils/text';
import history from 'utils/history';
import { CART_URL } from 'constants/routes';

import List from 'components/BasicComponent/List';
import Button from 'components/BasicComponent/Button';

import '../styles.scss';

const { Item } = List;

const ResultDomainList = (props) => {
  const intl = useIntl();
  const getText = createTranslatedText('common', intl);
  const { dataSource } = props;
  const numberItemInCard = 10; // TODO: Get total services in cart.

  // TODO
  // const addtoCart = () => {
  //   // TODO: add this item to cart
  // };

  const removeFromCart = () => {
    // TODO: Remove this item from cart
  };

  // TOTO
  // const actionAddCard = [
  //   <Button
  //     type="primary"
  //     key="regist-action"
  //     className="regist-action"
  //     onClick={addtoCart}
  //   >
  //     {getText('action.register')}
  //   </Button>,
  // ];

  const goToCart = () => {
    history.push(CART_URL);
  };

  // TODO: Implement with API cart
  const actionInfor = [
    <Button
      key="remove-action"
      className="remove-action"
      onClick={removeFromCart}
    >
      {getText('action.remove')}
    </Button>, // TODO: Remove this action in cart
    <Button
      type="primary"
      key="cart-action"
      className="cart-action"
      onClick={goToCart}
    >
      <ShoppingCartOutlined /> {numberItemInCard}
    </Button>,
  ];

  return (
    <List
      className="tino__list domain-list"
      // loading // TODO: Use loading from state
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={(item) => (
        <Item actions={actionInfor}>
          <div className="domainName">{item.domainName}</div>
          <div className="price">
            {item.price} {getText('unit')}
          </div>
        </Item>
      )}
    />
  );
};

export default ResultDomainList;
