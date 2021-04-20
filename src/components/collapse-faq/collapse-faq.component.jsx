import React, {useState, useRef} from "react";

import "./collapse-faq.styles.scss";

function CollapseFaq({question, answer}){
    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();

  

    return(
        <div className="collapse-container">
          <div className="question-section">
           <button 
            className="toggle"
            onClick={() => setIsOpen(!isOpen)}
            >{
                isOpen ? 
                <i class="fas fa-arrow-circle-up fa-2x"></i>          
                :
                <i class="fas fa-arrow-circle-down fa-2x"></i>
            }</button>
            <h2>{question}</h2>
          </div>
          <div className="content-parent"
          ref={parentRef}
          style={isOpen ? {
              height: parentRef.current.scrollHeight + "px",
          } : {
              height: "0px",
          }}
          >
            <div className="content">
             <p>{answer}</p>
            </div>
          </div>
        </div>
    )
}

export default CollapseFaq;


{/* <i class="fas fa-arrow-circle-up"></i>
<i class="fas fa-arrow-circle-down"></i> */}