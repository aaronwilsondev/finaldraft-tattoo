import React from "react";
import SocialIcons from "../social-icons/social-icons.component";

import "./contact-container.styless.scss";

const ContactContainer = () => (
    <div className="contact-container">
      <div className="contact-bg">
        <div className="bg-contact-container">
          <div className="google-maps">
          <h3 className="google-maps-text">Google Maps</h3> 
          </div>
          <h1 className="contact-title">Contact Us</h1>
        </div>
        <div className="contact-details-container">
          <div className="contact-details">
            <h4 className="contact-details-title">Our Address</h4>
            <p>45 Lorem ispum rd</p>
            <p>Loremipsum 45</p>
            <p>L24</p>
          </div>
          <div className="contact-details">
            <h4 className="contact-details-title">Our Contact</h4>
            <p>01 456378</p>
            <p>Loremipsum@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="form-container">

      </div>
    </div>
)

export default ContactContainer;