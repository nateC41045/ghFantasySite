import React, { useState } from "react";
import DraftTicker from "./DraftTicker";

const BestBallDraft = ({ teams, playerPool, setPlayerPool }) => {
    const [currentPick, setCurrentPick] = useState(1);
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

    const handlePick = (player) => {
        const updatedTeams = [...teams];
        updatedTeams[currentTeamIndex].players.push(player);
        setPlayerPool(prev => prev.filter(p => p.id !== player.id));

        // Move to next team in snake order
        let nextIndex = (currentTeamIndex + 1) % teams.length;
        setCurrentTeamIndex(nextIndex);
        setCurrentPick(prev => prev + 1);
    };

    return (
        <div>
            <DraftTicker
                currentPick={currentPick}
                totalPicks={teams.length * 5}
                currentTeam={teams[currentTeamIndex]}
            />
            <div className="player-selection">
                {playerPool.map(player => (
                    <button key={player.id} onClick={() => handlePick(player)}>
                        {player.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BestBallDraft;




