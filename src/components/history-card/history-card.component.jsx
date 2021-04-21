import React from "react"

import HistoryCardInfo from "../history-card-info/history-card-info.component";
import CircleImage from "../circle-image/circle-image.component"
import "./history-card.styles.scss"

const HistoryCard = ({imageUrl, title, date, text}) => (
    <div className="history-card">
      <CircleImage
      className="img-left" imageUrl={imageUrl}/>
      <HistoryCardInfo
      title={title}
      date={date}
      text={text}
      />
    </div>
)

export default HistoryCard;