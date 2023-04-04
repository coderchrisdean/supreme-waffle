import React from 'react';
import './Avatar.css';
import avatarImage from '../../assets/images/AVATAR.jpeg';

const Avatar = ({ src, alt, size }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar ${size === 'large' ? 'avatar-large' : ''}`}
    />
  );
};


Avatar.defaultProps = {
  src: avatarImage,
  alt: 'Christopher-Dean-Pharaoh',
  size: 'normal'
};

export default Avatar;
