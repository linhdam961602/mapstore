import React from 'react';
import { useSelector } from 'react-redux';

import { UserOutlined } from '@ant-design/icons';

import Avatar from 'components/BasicComponent/Avatar';

import { AVATAR_SIZE_48 } from 'constants/common';
import * as authSelector from 'pages/LoginPage/selector';

import '../styles.scss';

const AvatarUser = (props) => {
  const { src } = props;
  const userInfo = useSelector(authSelector.selectUserInfo);
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
        <p className="primary-text">{`${userInfo?.firstname} ${userInfo?.lastname}`}</p>
        <p className="secondary-text">{userInfo?.email}</p>
      </div>
    </div>
  );
};

export default AvatarUser;
