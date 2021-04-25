import React, {useState} from "react";
import SocialIcons from "../social-icons/social-icons.component";

import "./contact-container.styless.scss";

import FormInput from "../form-input/form-input.component";

function ContactContainer()  {
  const [ form, setform ] = useState({
    email: "",
    name: "",
    text: ""
  })

 const handleSubmit = event => {
    event.preventDefault();
    console.log(form)

    setform({
            email: "",
            name: "",
            text: ""
          });
  };

 const handleChange = event => {
    const { value, name} = event.target;

    setform(prevInputData => ({ ...prevInputData, [name]: value }));
  };

 
  
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
             value={form.email}
             handleChange={handleChange}
             required
             label="Email"
           />
           <FormInput
             name="name"
             type="fname"
             value={form.name}
             handleChange={handleChange}
             required
             label="Name"
           />
           <FormInput
             name="text"
             type="text"
             value={form.text}
             handleChange={handleChange}
             required
             label="Message"
           />
           <button
           className="form-btn"
           type="submit"
           >submit</button>
           {/* <input 
           className="form-btn"
           type="submit"
           value="Submit Form"
           /> */}
         </form>
         <SocialIcons/>
      </div>
    </div>
)}

export default ContactContainer;