import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };  

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, message);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Contact Me</h3>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={handleEmailChange} />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={handleMessageChange} />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;