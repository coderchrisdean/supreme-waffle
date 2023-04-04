import React from 'react';
import './Footer.css';

// Footer Component
const Footer = () => {
    return (
        <footer className="footer">
            <a href="http://github.com/coderchrisdean" target = "_blank" rel="noopener noreferrer" className="footer=link">GitHub</a>
            <a href="http://www.linkedin.com/in/christopherdean" target = "_blank" rel="noopener norefer" className="footer-link">LinkedIn</a>
            <a href="mailto:coderchrisdean@gmail.com" target = "_blank" rel="noopener no referrer" className="footer-link">E-mail</a>
        </footer>
    );
};

export default Footer;
