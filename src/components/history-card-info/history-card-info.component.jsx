import React from "react";

import "./history-card-info.styles.scss"

const HistoryCardInfo = ({title, date, text}) => (
    <div className="info-container">
      <h2 className="title">{title}</h2>
      <h3 className="date">{date}</h3>
      <p className="text">{text}</p>
    </div>
)

export default HistoryCardInfo;