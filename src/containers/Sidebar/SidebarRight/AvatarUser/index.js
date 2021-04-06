import React from 'react';

import { UserOutlined } from '@ant-design/icons';

import Avatar from 'components/BasicComponent/Avatar';

import { AVATAR_SIZE_48 } from 'constants/common';

import '../styles.scss';

const AvatarUser = (props) => {
  const { src } = props;
  const imageAvatar = src ? (
    <Avatar
      size={AVATAR_SIZE_48}
      src={src}
      onClick={(e) => e.preventDefault()}
    />
  ) : (
    <Avatar
      size={AVATAR_SIZE_48}
      icon={<UserOutlined />}
      onClick={(e) => e.preventDefault()}
    />
  );

  return (
    <div className="avatarUser_wrapper">
      <div>{imageAvatar}</div>
      <div className="information">
        <p className="primary-text">Con Gian Phat Sang</p>
        <p className="secondary-text">danny.thanhtruc@gmail.com</p>
      </div>
    </div>
  );
};

export default AvatarUser;
