import React from 'react';
import Avatar from '../Avatar/Avatar';
import Navigation from '../Navigation/Navigation';
import avatarImage from '../../assets/images/AVATAR.jpeg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
            <Avatar></Avatar>
                {/* <img className="avatar-large" src={avatarImage} alt="Christopher-Dean-Pharaoh"></img> */}
                <h1 className="header-title">Christopher Dean</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
