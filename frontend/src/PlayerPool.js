import React, { useState, useEffect } from 'react';
import playersData from './players.json';

const PlayerPool = ({ onSelectPlayer }) => {
    const [players, setPlayers] = useState([]);
    const [sortOption, setSortOption] = useState("name");

    useEffect(() => {
        setPlayers(playersData);
    }, []);

    const handleSort = (option) => {
        let sortedPlayers = [...players];
        if (option === "position") {
            sortedPlayers.sort((a, b) => a.position.localeCompare(b.position));
        } else if (option === "points2024") {
            sortedPlayers.sort((a, b) => b.points2024 - a.points2024);
        } else if (option === "projections2025") {
            sortedPlayers.sort((a, b) => b.projections2025 - a.projections2025);
        }
        setPlayers(sortedPlayers);
        setSortOption(option);
    };

    return (
        <div className="player-pool">
            <h2>Available Players</h2>
            <select onChange={(e) => handleSort(e.target.value)} value={sortOption}>
                <option value="name">Name</option>
                <option value="position">Position</option>
                <option value="points2024">2024 Points</option>
                <option value="projections2025">2025 Projections</option>
            </select>
            <ul>
                {players.map((player, index) => (
                    <li key={index} onClick={() => onSelectPlayer(player)}>
                        {player.name} - {player.position} - {player.points2024} pts
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerPool;