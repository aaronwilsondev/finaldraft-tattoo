import React from "react";

import "./social-icons.styles.scss";
import { Link } from "react-router-dom";

const SocialIcons = () => (
    <div className="social-icons-container">
       <a href="https://www.facebook.com">
        <i class="h fab fa-facebook fa-3x"></i>
       </a>
       <a href="https://www.twitter.com">
        <i class="h fab fa-twitter fa-3x"></i>
       </a>
       <a href="https://www.instagram.com">
        <i class="h fab fa-instagram fa-3x"></i>
       </a>
    </div>
)

export default SocialIcons;