import React from 'react';
import { useIntl } from 'react-intl';

import { BellOutlined, InfoCircleOutlined } from '@ant-design/icons';

import Dropdown from 'components/BasicComponent/Dropdown';
import Badge from 'components/BasicComponent/Badge';
import List from 'components/BasicComponent/List';

import { createTranslatedText } from 'utils/text';

import '../styles.scss';

const { Item } = List;

const NotficationRing = (props) => {
  const intl = useIntl();
  const getText = createTranslatedText('mypage', intl);
  const { list } = props;

  const theRing = (
    <Badge dot={list?.lenght > 0} className="theRing">
      <BellOutlined />
    </Badge>
  );

  // TODO: remove after mock API.
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  const DropdownMenu = () => (
    <List
      dataSource={list?.lenght > 0 ? data : [getText('dropdownMenu.emmtyNoti')]}
      renderItem={(item) => (
        <Item>
          <InfoCircleOutlined />
          <span>{item}</span>
        </Item>
      )}
      className="listNotification"
    />
  );

  return (
    <>
      <Dropdown
        overlay={<DropdownMenu />}
        trigger="click"
        placement="bottomRight"
      >
        {theRing}
      </Dropdown>
    </>
  );
};

export default NotficationRing;
