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
      content: 'Phone number',
    });
    tippy(emailRef.current, {
      content: 'Email address',
    });
    tippy(githubRef.current, {
      content: 'GitHub profile',
    });
    tippy(linkedinRef.current, {
      content: 'LinkedIn profile',
    });
  }, []);

  return (
    <div className="contact">
      <div className="contact-box">
        {/* <i className="fa fa-envelope"></i> */}
      </div>
      <a href={`tel:${phone}`} className="contact-link" ref={phoneRef}>
        <i className="fa fa-phone"></i>{phone}
      </a>
      <a href={`mailto:${email}`} className="contact-link" ref={emailRef}>
        <i className="fa fa-envelope"></i> {email}
      </a>
      <a href={github} className="contact-link" target="_blank" rel="noopener noreferrer" ref={githubRef}>
        <i className="fa fa-github"></i>  {github}
      </a>
      <a href={linkedin} className="contact-link" target="_blank" rel="noopener noreferrer" ref={linkedinRef}>
        <i className="fa fa-linkedin"></i> {linkedin}
      </a>
    </div>
  );
};

export default Contact;
