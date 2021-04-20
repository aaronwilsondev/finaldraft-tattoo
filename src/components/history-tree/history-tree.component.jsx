import React from "react";

import HistoryTreeContainer from "../history-tree-container/history-tree-container.component";

import "./history-tree.styles.scss";

const HistoryTree = () => (
    <div className="history-tree">
    <h1 className="history-title">OUR HISTORY</h1>
      <HistoryTreeContainer/>
    </div>
)

export default HistoryTree;