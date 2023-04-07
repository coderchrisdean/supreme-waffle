import React, { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('About Me');
    const handleNavClick = (link) => {
        setActiveLink(link);
};

return (
    <nav className="navigation">
        <ul className="nav-list">
        {['About Me', 'Portfolio', 'Technologies', 'Resume'].map((link) => (
            <li key={link} className={`nav-item ${activeLink === link ? 'active' : ''}`}>
                <button onClick={() => handleNavClick(link)} className="nav-link">{link}</button>
            </li>
        ))}
        </ul>
        </nav>
);
        };

        export default Navigation;