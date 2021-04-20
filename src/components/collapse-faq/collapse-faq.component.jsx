import React, {useState, useRef} from "react";

import "./collapse-faq.styles.scss";

function CollapseFaq(){
    const [isOpen, setIsOpen] = useState(false);

    const parentRef = useRef();

    return(
        <div className="collapse-container">
          <div className="question-section">
          v <button 
            className="toggle"
            onClick={() => setIsOpen(!isOpen)}
            >btn</button>
            <h2>some question text here?</h2>
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
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium</p>
            </div>
          </div>
        </div>
    )
}

export default CollapseFaq;