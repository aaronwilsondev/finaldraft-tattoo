import React from "react";
import HistoryCardInverted from "../history-card-inverted/history-card-inverted.component";
import HistoryCard from "../history-card/history-card.component";
import SocialIcons from "../social-icons/social-icons.component";

import "./history-tree-styles.scss";

const HistoryTreeContainer = () => (
    <div className="history-tree-container">
       <HistoryCard className="offset-right"
           imageUrl="images/bd-tattoo-img-2.jpg"
           title="We opened up the doors"
           date="15th October 1997"
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                 molestiae quas vel sint commodi"
       />
       <div className="vertical-line"/>
        <HistoryCardInverted 
           imageUrl="images/bd-tattoo-img-3.jpg"
           title="We opened up the doors"
           date="15th October 1997"
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                 molestiae quas vel sint commodi"
       />
       <div className="vertical-line"/>
        <HistoryCard 
           imageUrl="images/bd-tattoo-img-4.jpg"
           title="We opened up the doors"
           date="15th October 1997"
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                 molestiae quas vel sint commodi"
       />
       <SocialIcons/>
    </div>
) 

export default HistoryTreeContainer;