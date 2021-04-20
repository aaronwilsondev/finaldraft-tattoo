import React from "react";
import CollapseFaq from "../../components/collapse-faq/collapse-faq.component";
import FAQ_DATA from "./faq-data";

import "./faq.styles.scss";
// import FAQ_DATA from "./faq-data.js"

const FaqPage = () => (


    <div className="faqpage">
    <h1 className="faq-title">F.A.Q</h1>
     <div className="faq-container">
     {FAQ_DATA.faq.map(({id, ...otherProps}) => (
         <CollapseFaq key={id} {...otherProps} />
     ))}
     </div>
     
    </div>
)

export default FaqPage;