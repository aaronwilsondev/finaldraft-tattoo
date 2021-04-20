import React from "react";
import HeroSection from "../../components/hero-section/hero-section.component";
import HistoryTree from "../../components/history-tree/history-tree.component";

import "./homepage.styles.scss";

const HomePage = () => (
    <div className="homepage">
    <HeroSection/>
    <HistoryTree/>
    </div>
)

export default HomePage;