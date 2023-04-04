import React from 'react';
import './Contact.css';

const Contact = ({ phone, email, github }) => {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <a href={`tel:${phone}`} className="contact-link">Phone: {phone}</a>
          <a href={`mailto:${email}`} className="contact-link">Email: {email}</a>
          <a href={github} className="contact-link" target="_blank" rel="noopener noreferrer">GitHub: {github}</a>
        </div>
      </div>
    );
  };
  

export default Contact;
