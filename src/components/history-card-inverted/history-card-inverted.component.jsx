import React from "react"

import HistoryCardInfo from "../history-card-info/history-card-info.component";
import CircleImage from "../circle-image/circle-image.component"
import "./history-card-inverted.styles.scss"

const HistoryCardInverted = ({imageUrl, title, date, text}) => (
    <div className="history-card">
      <HistoryCardInfo
      title={title}
      date={date}
      text={text}
      />
      <CircleImage className="img-left" imageUrl={imageUrl}/>  
    </div>
)

export default HistoryCardInverted;