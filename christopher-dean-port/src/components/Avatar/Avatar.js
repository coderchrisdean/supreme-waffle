import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/images/AVATAR.jpeg';

const Avatar = ({ size }) => {
  return (
    <img
      src={avatarImage}
      alt="Christopher-Dean-Pharaoh"
      className={`avatar ${size === 'large' ? 'avatar-large' : ''}`}
    />
  );
};

Avatar.defaultProps = {
  size: 'normal'
};

export default Avatar;
