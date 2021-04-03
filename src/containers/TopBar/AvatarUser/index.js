import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import DropdownMenu from '../DropdownMenu';

import Avatar from 'components/BasicComponent/Avatar';

import Dropdown from 'components/BasicComponent/Dropdown';

import { AVATAR_SIZE } from 'constants/common';

import '../styles.scss';

const AvatarUser = (props) => {
  const { src } = props;
  const imageAvatar = src ? (
    <Avatar size={AVATAR_SIZE} src={src} onClick={(e) => e.preventDefault()} />
  ) : (
    <Avatar
      size={AVATAR_SIZE}
      icon={<UserOutlined />}
      onClick={(e) => e.preventDefault()}
    />
  );

  return (
    <>
      <Dropdown
        overlay={<DropdownMenu />}
        trigger="click"
        placement="bottomRight"
      >
        {imageAvatar}
      </Dropdown>
    </>
  );
};

export default AvatarUser;
