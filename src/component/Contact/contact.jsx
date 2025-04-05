import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log("formData", formData);

    formData.append("access_key", "e5a11722-131d-48cf-92b2-b3d526593299");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert(result);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className="contact-sections">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail" />
              <p>aloksoftprofessional@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call" />
              <p>+91 7999651676</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location" />
              <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">your name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">your email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message</label>
          <textarea placeholder="Enter your message" rows="8" name="text" />
          <button type="submit" className="contact-submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
