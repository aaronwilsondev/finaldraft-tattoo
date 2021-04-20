import React from "react";

import "./social-icons.styles.scss";
import { Link } from "react-router-dom";

const SocialIcons = () => (
    <div className="social-icons-container">
       <Link>
       <i class="h fab fa-facebook fa-3x"></i>
       </Link>
       <Link>
       <i class="h fab fa-twitter fa-3x"></i>
       </Link>
       <Link>
       <i class="h fab fa-instagram fa-3x"></i>
       </Link>
    </div>
)

export default SocialIcons;