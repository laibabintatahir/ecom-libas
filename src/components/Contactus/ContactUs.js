import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./style.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_si5c81i', 'template_e2xefpj', form.current, 'ZLrQH3Wrpta8_jbEW')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Share Your Query/Critics/Suggestions with libaslégrace Team.</p>
      <div className="contact-details">
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
