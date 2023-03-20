import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Result = () => {
    return(
        <p>Your message has been successfully sent.</p>
    );
};

const Contact = () => {
    const form = useRef();
    const [result, showResult] = useState(false);
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4vuzzqz', 'template_w9qgsqb', form.current, 'Grh6lQkAe9GBU3nU1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };

    // Hide result
    setTimeout(() => {
        showResult(false)
    },5000);

    return(
        <div className="form-container" id="contactLink">
            <h1>CONTACT US</h1>
            <h3>Email us, we would love to hear form you</h3>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" required/>
            <input type="email" name="user_email" placeholder="Email" required/>
            <textarea name="message" placeholder="Message" rows="4" required></textarea>
            <button><span class="text">Send Message</span></button>
            <div className="row">{result ? <Result /> : null}</div>
            </form>
        </div>
    )
};

export default Contact; 