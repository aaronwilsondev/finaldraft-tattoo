import React, {useState} from "react";
// import SocialIcons from "../social-icons/social-icons.component";

import "./contact-container.styless.scss";

import FormInput from "../form-input/form-input.component";

function ContactContainer({handleSubmit, handleChange})  {
  const [ form, setform ] = useState({
    email: "",
    name: "",
    text: ""
  })

  handleSubmit = event => {
    event.preventDefault();

    setform({
            email: "",
            name: "",
            text: ""
          })
  }

  handleChange = event => {
    const { value, name} = event.target;

    setform({ [name]: value })
  }

 
  
  return(
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
         <h3 className="form-title">Contact Us</h3>
         <form onSubmit={handleSubmit}>
           <FormInput
             name="email"
             type="email"
             handleChange={handleChange}
             value={form.email}
             required
             label="Email"
           />
           <FormInput
             name="name"
             handleChange={handleChange}
             type="fname"
             value={form.name}
             required
             label="Name"
           />
           <FormInput
             name="text"
             handleChange={handleChange}
             type="text"
             value={form.text}
             required
             label="Message"
           />
           <input 
           type="submit"
           calue="Submit Form"
           />
         </form>
      </div>
    </div>
)}

export default ContactContainer;