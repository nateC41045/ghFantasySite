import React from "react";
import "./DraftTicker.css"; // Import styles

const DraftTicker = ({ currentPick, totalPicks, currentTeam }) => {
    return (
        <div className="draft-ticker">
            <h2>Draft Pick {currentPick} / {totalPicks}</h2>
            <h3>On the Clock: <span className="highlight">{currentTeam.name}</span></h3>
        </div>
    );
};

export default DraftTicker;