import React from 'react';
import './Navigation.css';

const Navigation = ({ activeLink, onNavClick }) => {
  
  const handleNavClick = (link) => {
    onNavClick(link);
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {['About Me', 'Portfolio', 'Technologies', 'Resume', 'Contact'].map((link) => (
          <li key={link} className={`nav-item ${activeLink === link ? 'active' : ''}`}>
            <button onClick={() => handleNavClick(link)} className="nav-link">{link}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
