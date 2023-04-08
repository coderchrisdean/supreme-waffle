import React, {useRef, useEffect } from 'react';
import './Contact.css';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const Contact = ({ phone, email, github, linkedin }) => {
  const phoneRef = useRef();
  const emailRef = useRef();
  const githubRef = useRef();
  const linkedinRef = useRef();

  useEffect(() => {
    tippy(phoneRef.current, {
      content: 'Phone Number',
    });
    tippy(emailRef.current, {
      content: 'E-mail Address',
    });
    tippy(githubRef.current, {
      content: 'GitHub Profile',
    });
    tippy(linkedinRef.current, {
      content: 'LinkedIn Profile',
    });
  }, []);

  return (
    <div className="contact">
    <h3>Contact Me</h3>
      <div className="contact-box">
       
      </div>
      <ul>
      <li href={`tel:${phone}`} className="contact-link" ref={phoneRef}>
        <i className="fa fa-phone"></i>{phone}
      </li>
      <li href={`mailto:${email}`} className="contact-link" ref={emailRef}>
        <i className="fa fa-envelope"></i> {email}
      </li>
      <li href={github} className="contact-link" target="_blank" rel="noopener noreferrer" ref={githubRef}>
        <i className="fa fa-github"></i>  {github}
      </li>
      <li href={linkedin} className="contact-link" target="_blank" rel="noopener noreferrer" ref={linkedinRef}>
        <i className="fa fa-linkedin"></i> {linkedin}
      </li>
      </ul>
    </div>
  );
};

export default Contact;
