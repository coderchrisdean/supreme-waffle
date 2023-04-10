import React, { useState } from 'react';

import Avatar from '../Avatar/Avatar';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = ({ onNavClick, showTechnologies }) => {
    const [activeLink, setActiveTab] = useState('About Me');
    
    const handleNavClick = (link) => {
      onNavClick(link);
      setActiveTab(link);
    };
  
    return (
      <header className="header">
        <div className="header-content">
          <Avatar headerSize />
          <h1 className="header-title">Christopher Dean</h1>
        </div>
        <Navigation activeLink={activeLink} onNavClick={handleNavClick} showTechnologies={showTechnologies} />
      </header>
    );
  };
  

export default Header;
