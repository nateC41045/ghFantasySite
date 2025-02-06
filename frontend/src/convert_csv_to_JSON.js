const fs = require('fs');
const csv = require('csv-parser');

let playersData = []; // <-- This is where we define the array to hold the parsed CSV data.

fs.createReadStream('players.csv')
    .pipe(csv())
    .on('data', (row) => playersData.push(row)) // Pushing each row of CSV into playersData
    .on('end', () => {
        fs.writeFileSync('players.json', JSON.stringify(playersData, null, 2), 'utf-8');
        console.log('CSV to JSON conversion done!');
    });