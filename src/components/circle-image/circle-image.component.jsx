import React from "react";

import "./circle-image.styles.scss";

const CircleImage = ({imageUrl}) => (
    <div className="circle-image"
    style={
        {backgroundImage: `url(${imageUrl})`}
    }
    >
    </div>
)

export default CircleImage;