import React from "react";

import "./header.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/bddog.svg";

const Header = () => (
    <div className="header">
       <Link to="/" className="logo-container">
       <Logo className="logo"/>
       </Link>
       <div className="options">
         <Link className="option" to="/gallery">
          Gallery
         </Link>
         <Link className="option" to="/contact">
          Contact
         </Link>
         <Link className="option" to="/faq">
           FAQ
         </Link>
       </div>
       <div className="cta-btn-container">
         <button className="cta-btn">BOOK NOW</button>
       </div>
    </div>
)

export default Header;