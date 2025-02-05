const express = require('express');
const cors = require('cors');
const fs = require('fs');
const csv = require('csv-parser');
const app = express();

app.use(cors());  // Enable CORS to handle cross-origin requests

let playersData = [];

// Parse the CSV data
fs.createReadStream('players.csv')
    .pipe(csv())
    .on('data', (row) => playersData.push(row))
    .on('end', () => {
        console.log('CSV file successfully processed');
    });

// Endpoint to fetch players based on position
app.get('/players', (req, res) => {
    const { position } = req.query;
    const filteredPlayers = playersData.filter(player => player.position === position);
    res.json(filteredPlayers);  // Send the filtered list as a JSON response
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});