import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeLink, onNavClick }) => {
  return (
    <div className="sidebar-container">
      {/* <div className="sidebar-header">Menu</div> */}
      <div className="sidebar-links">
        <a
          className={`card sidebar-link ${activeLink === 'About Me' ? 'active' : ''}`}
          href="#about-me"
          onClick={() => onNavClick('About Me')}
        >
          About Me
        </a>
        <a
          className={`card sidebar-link ${activeLink === 'Portfolio' ? 'active' : ''}`}
          href="#portfolio"
          onClick={() => onNavClick('Portfolio')}
        >
          Portfolio
        </a>
        <a
          className={`card sidebar-link ${activeLink === 'Technologies' ? 'active' : ''}`}
          href="#technologies"
          onClick={() => onNavClick('Technologies')}
        >
          Technologies
        </a>
        <a
          className={`card sidebar-link ${activeLink === 'Resume' ? 'active' : ''}`}
          href="#resume"
          onClick={() => onNavClick('Resume')}
        >
          Resume
        </a>
        <a
          className={`card sidebar-link ${activeLink === 'Contact' ? 'active' : ''}`}
          href="#contact"
          onClick={() => onNavClick('Contact')}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
