import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './App.css';  // Use existing styles
//import Papa from 'papaparse';
import { getPlayerImage } from "./utils";
import playersData from './players.json'; // Load static player data

function PositionalRankings() {
    const [players, setPlayers] = useState([]);
    const [position, setPosition] = useState('QB');

    useEffect(() => {
        //fetch("/players.json")  // Load the JSON file from the public folder
          //  .then(response => response.json())
            //.then(data => setPlayers(data))
            //.catch(error => console.error("Error loading players:", error));
            setPlayers(playersData);
    }, []);

    const filteredPlayers = players.filter(player => player.position === position);

    return (
        <div className="positional-rankings">
            <h2>Positional Rankings</h2>

            {/* Position Selector */}
            <select value={position} onChange={(e) => setPosition(e.target.value)}>
                <option value="QB">Quarterbacks</option>
                <option value="RB">Running Backs</option>
                <option value="WR">Wide Receivers</option>
                <option value="TE">Tight Ends</option>
            </select>

            {/* Players Table */}
            {filteredPlayers.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Team</th>
                            <th>2024 Points</th>
                            <th>2025 Projection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPlayers.map((player, index) => (
                            <tr key={player.id || index}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={getPlayerImage(player.name)}  // Fallback image
                                        alt={player.name}
                                        className="player-image"
                                    />
                                    {player.name}
                                </td>
                                <td>{player.team}</td>
                                <td>{player.points_2024}</td>
                                <td>{player.points_2025}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No players found for this position.</p>
            )}
        </div>
    );
}

export default PositionalRankings;