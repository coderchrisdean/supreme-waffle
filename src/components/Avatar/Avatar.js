import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/images/AVATAR.jpeg';

const Avatar = ({ size, headerSize }) => {
  const avatarSize = headerSize ? '100px' : size === 'x-large' ? '250px' : '150px';

  return (
    <img
      src={avatarImage}
      alt="Christopher-Dean-Pharaoh"
      className={`avatar ${size === 'x-large' ? 'avatar-large' : ''}`}
      style={{ height: avatarSize, width: avatarSize }}
    />
  );
};

Avatar.defaultProps = {
  size: 'large',
  headerSize: false
};

export default Avatar;
