import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import playersData from './players.json'; // Import static JSON file

function Rankings() {
    const [players, setPlayers] = useState([...playersData]);

    //useEffect(() => {
    //    const fetchPlayers = async () => {
    //        try {
                // Fetch players from API
    //            const apiResponse = await axios.get('http://127.0.0.1:5000/players');
     //           const apiPlayers = apiResponse.data;

                // Fetch players from CSV
      //          const csvResponse = await axios.get('/players.csv');
     //           const parsedCSV = Papa.parse(csvResponse.data, { header: true, skipEmptyLines: true });

                // Merge API and CSV players
       //         const mergedPlayers = [...apiPlayers, ...parsedCSV.data];
                // Sort players based on 2024 points in descending order
     //           const sortedPlayers = mergedPlayers.sort((a, b) => b.points_2024 - a.points_2024);
     //           setPlayers(sortedPlayers);
       //     } catch (error) {
     //           console.error('Error fetching players:', error);
     //       }
    //    };

    //    fetchPlayers();
    //}, []);

    // Function to move player up
    const movePlayerUp = (index) => {
        if (index > 0) {
            const updatedPlayers = [...players];
            const temp = updatedPlayers[index];
            updatedPlayers[index] = updatedPlayers[index - 1];
            updatedPlayers[index - 1] = temp;
            setPlayers(updatedPlayers);
        }
    };

    // Function to move player down
    const movePlayerDown = (index) => {
        if (index < players.length - 1) {
            const updatedPlayers = [...players];
            const temp = updatedPlayers[index];
            updatedPlayers[index] = updatedPlayers[index + 1];
            updatedPlayers[index + 1] = temp;
            setPlayers(updatedPlayers);
        }
    };

    return (
        <div>
            <h1>Player Rankings</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Team</th>
                        <th>2024 Points</th>
                        <th>2025 Projection</th>
                        <th>Actions</th> {/* Added a column for actions */}
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={player.id || index}> {/* Use 'id' if available, else use index */}
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.team}</td>
                            <td>{player.points_2024}</td>
                            <td>{player.points_2025}</td>
                            <td>
                                {/* Plus and Minus buttons to change the rank */}
                                <button onClick={() => movePlayerUp(index)} disabled={index === 0}>+</button>
                                <button onClick={() => movePlayerDown(index)} disabled={index === players.length - 1}>-</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Rankings;