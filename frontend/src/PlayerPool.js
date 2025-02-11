import React from "react";

const PlayerPool = ({ playerPool, onSelectPlayer }) => {
    console.log("PlayerPool rendering with playerPool:", playerPool); // Log the playerPool to track updates

    return (
        <div className="player-pool">
            <h3>Available Players</h3>
            {playerPool.length > 0 ? (
                <ul>
                    {playerPool.map((player, index) => (
                    <li key={player.id || `player-${index}`}>
                        <button onClick={() => onSelectPlayer(player)}>
                            {player.name}
                        </button>
                    </li>
                    ))}
                </ul>
            ) : (
                <p>No players left in the pool</p>
            )}
        </div>
    );
};

export default PlayerPool;