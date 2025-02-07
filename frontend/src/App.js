import React, { useState, useEffect } from 'react';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from './Header'; // Import Header component
import HomePage from './HomePage';     // Import Home component
import About from './About';   // Import About component
import Services from './Services'; // Import Services component
import Contact from './Contact';   // Import Contact component
import PositionalRankings from './PositionalRankings';
import { getPlayerImage } from "./utils";

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MockDraft from './MockDraft';  // Add the new MockDraft page component

//import axios from 'axios';
//import Papa from 'papaparse';
import Rankings from './rankings';
import './App.css';
//import { DndContext } from '@dnd-kit/core';
import playersData from './players.json'; // Load static player data from a JSON file

const Home = () => {
    const [drafts, setDrafts] = useState([]);
    const [players, setPlayers] = useState([]);
    const [draftType, setDraftType] = useState('salary');
    const [participants, setParticipants] = useState(8);


    const teamLogos = {
        'ARI': 'https://upload.wikimedia.org/wikipedia/commons/0/03/Los_Angeles_Lakers_logo.svg', // Example for Lakers
        'ATL': 'https://upload.wikimedia.org/wikipedia/ro/c/c5/Atlanta_Falcons_logo.svg', // Example for Celtics
        'BAL': 'https://upload.wikimedia.org/wikipedia/commons/5/53/Golden_State_Warriors_logo.svg', // Example for Warriors
        'BUF': 'https://upload.wikimedia.org/wikipedia/ro/7/77/Buffalo_Bills_logo.svg',
        'CAR': 'https://upload.wikimedia.org/wikipedia/fr/0/0f/Logo_Carolina_Panthers_2012.svg',
        'CHI': 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Chicago_Bears_logo.svg',
        'CIN': 'https://upload.wikimedia.org/wikipedia/commons/8/81/Cincinnati_Bengals_logo.svg',
        'CLE': 'https://upload.wikimedia.org/wikipedia/en/d/d9/Cleveland_Browns_logo.svg',
        'DAL': 'https://upload.wikimedia.org/wikipedia/commons/1/15/Dallas_Cowboys.svg',
        'DEN': 'https://upload.wikimedia.org/wikipedia/el/4/44/Denver_Broncos_logo.svg',
        'DET': 'https://upload.wikimedia.org/wikipedia/fr/c/ca/Logo_Detroit_Lions_2017.svg',
        'GB': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Green_Bay_Packers_logo.svg',
        'HOU': 'https://upload.wikimedia.org/wikipedia/de/2/28/Houston_Texans_logo.svg',
        'IND': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Indianapolis_Colts_logo.svg',
        'JAX': 'https://upload.wikimedia.org/wikipedia/en/7/74/Jacksonville_Jaguars_logo.svg',
        'KC': 'https://upload.wikimedia.org/wikipedia/en/e/e1/Kansas_City_Chiefs_logo.svg',
        'MIA': 'https://upload.wikimedia.org/wikipedia/en/3/37/Miami_Dolphins_logo.svg',
        'MIN': '',
        'NE': '',
        'NO': '',
        'NYG': '',
        'NYJ': '',
        'LV': '',
        'PHI': 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Philadelphia_Eagles_wordmark.svg',
        'PIT': '',
        'LAC': '',
        'SF': '',
        'SEA': '',
        'LAR': '',
        'TB': '',
        'TEN': '',
        'WAS': ''
    }

    const teamData = {
        'BAL': { color: '#241773', name: 'Ravens' },
        'ATL': { color: '#A71930', name: 'Falcons' },
        'ARI': { color: '#97233F', name: 'Cardinals' },
        'BUF': { color: '#00338D', name: 'Bills' },
        'CAR': { color: '#0085CA', name: 'Panthers' },
        'CHI': { color: '#C83803', name: 'Bears' },
        'CIN': { color: '#FB4F14', name: 'Bengals' },
        'CLE': { color: '#311D00', name: 'Browns' },
        'DAL': { color: '#003594', name: 'Cowboys' },
        'DEN': { color: '#FB4F14', name: 'Broncos' },
        'DET': { color: '#0076B6', name: 'Lions' },
        'GB': { color: '#203731', name: 'Packers' },
        'HOU': { color: '#03202F', name: 'Texans' },
        'IND': { color: '#002C5F', name: 'Colts' },
        'JAX': { color: '#006778', name: 'Jaguars' },
        'KC': { color: '#E31837', name: 'Chiefs' },
        'LV': { color: '#000000', name: 'Raiders' },
        'LAC': { color: '#0080C6', name: 'Chargers' },
        'LAR': { color: '#003594', name: 'Rams' },
        'MIA': { color: '#008E97', name: 'Dolphins', },
        'MIN': { color: '#4F2683', name: 'Vikings' },
        'NE': { color: '#002244', name: 'Patriots' },
        'NO': { color: '#D3BC8D', name: 'Saints' },
        'NYG': { color: '#0B2265', name: 'Giants' },
        'NYJ': { color: '#125740', name: 'Jets' },
        'PHI': { color: '#004C54', name: 'Eagles' },
        'PIT': { color: '#FFB612', name: 'Steelers' },
        'SF': { color: '#AA0000', name: '49ers' },
        'SEA': { color: '#002244', name: 'Seahawks' },
        'TB': { color: '#D50A0A', name: 'Buccaneers' },
        'TEN': { color: '#0C2340', name: 'Titans' },
        'WAS': { color: '##5A1414', name: 'Commanders' },
        // R is denoted in csv in team for rookies
        'R': { color: '#000000', name: 'Rookie'}


    };

    const teamColors = {

        'BAL': '#241773',
        'ATL':  '#A71930',
        'ARI': '#97233F', 
        'BUF': '#00338D',
        'CAR': '#0085CA',
        'CHI': '#C83803',
        'CIN': '#FB4F14', 
        'CLE': '#311D00', 
        'DAL':  '#003594', 
        'DEN': '#FB4F14', 
        'DET':  '#0076B6',
        'GB': '#203731',
        'HOU': '#03202F', 
        'IND': '#002C5F',
        'JAX':  '#006778', 
        'KC':  '#E31837',
        'LV':  '#000000', 
        'LAC':  '#0080C6', 
        'LAR':  '#003594', 
        'MIA':  '#008E97', 
        'MIN':  '#4F2683',
        'NE':  '#002244', 
        'NO':  '#D3BC8D', 
        'NYG': '#0B2265', 
        'NYJ':  '#125740', 
        'PHI': '#004C54', 
        'PIT': '#FFB612', 
        'SF': '#AA0000', 
        'SEA': '#002244',
        'TB': '#D50A0A',
        'TEN': '#0C2340', 
        'WAS': '##5A1414',
        'R': '#000000'
        
    };


    const playerImages = {

        'Lamar Jackson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/cruqs6qpbykh7a2whd7p',
        'Derrick Henry': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/m7bv3lv9puapabltvykk',
        'Zay Flowers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/oidhqwg0fjvanyk57nc1',
        'Mark Andrews': '',
        'Isaiah Likely': '',

        'Joe Burrow': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/jzzqz5ubkilrn9dpxtlp',
        'Chase Brown': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rxzzjpgjgjsmmkekp6zu',

        'Jamaar Chase': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/qkcb3qt2fhasfgtfuprd',
        'Saquon Barkley': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_png/eagles/z4ekl4msgtokunjwjnom.png',
        'Bijan Robinson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/rydwvaod6ethdjap41l6',
        'Darnell Mooney': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_auto/falcons/cc30bcmhl2tibal97txi.jpg',
        'Drake London': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/wikjazqtt3uunjufgqrf',
        'Michael Penix Jr.': 'https://static.clubs.nfl.com/image/upload/t_landscape_tablet/f_auto/falcons/c0mawkxxeaseokeydgzm.jpg',
        'Kyle Pitts': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/falcons/kjxlpg5qlhgwtl6lju0d.jpg',
        'Jahmyr Gibbs': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/f5y3osxxtov5rgfv4ra5',
        'Amon-Ra St. Brown': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/jmfuamqblg8jag0stpnq',
        'Jared Goff': 'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/wtdt0g0vfx0i2cdyuyu8.jpg',
        'Jameson Williams': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/kt6xzcnjbe9affdfsayt',
        'Sam Laporta': 'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/ljpdtmvh0tx7n1qium2w.jpg',
        'David Montgomery':'https://static.clubs.nfl.com/image/upload/t_thumb_squared/f_auto/lions/pysu0uc0m5ppvrcql0mi.jpg',
        'Davante Adams': '',
        'Jordan Addison': 'https://static.clubs.nfl.com/image/upload/t_new_photo_album/f_auto/vikings/g8m9it1pxqc212tz9477.jpg',
        'Justin Jefferson': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/vrftbpzwk6qmv0zjcysg',
        'Puka Nacua': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/i1pmrhua5gpvwgsqphxa',
        'CeeDee Lamb': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/tfuj9njqdw2dovkwhryc',
        'Jalen Tolbert':'',
        'Ashton Jeanty': 'https://images.sidearmdev.com/crop?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fbroncosports.com%2Fimages%2F2024%2F8%2F1%2FJeanty_Ashton_2024.jpg&width=180&height=270&type=webp',
        'Jake Ferguson': 'https://static.clubs.nfl.com/image/private/t_thumb_squared/f_auto/cowboys/odaj9tgr2tbds1l3cd43.jpg',
        'Dak Prescott': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/cowboys/rtwaqxgsuw6nhxc9sgfa.jpg',
        'Rico Dowdle': 'https://static.clubs.nfl.com/image/private/t_landscape_tablet/f_auto/cowboys/ry8tguubckvwmihqitf4.jpg',
        'Brandon Aiyuk': '',
        'Cam Akers': '',
        'Jordan Akins': '',
        'Josh Allen': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/lq4ezafbszwwt2qsvhqv',
        'James Cook': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bzdvrarxum9zate4te4b',
        'Nico Collins': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/q7c9aq8rpremfygslmya',
        'Brian Thomas Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/gsz15iz0ppibhslzzgch',
        'A.J. Brown': 'https://static.www.nfl.com/image/private/t_player_profile_landscape/f_auto/league/a014sgzctarbvhwb35lw',
        'Devonta Smith': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/bmdflwy52nsk7zpnfhwb',
        'Jalen Hurts': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/k2p5yb4qmqwoo3qcapgt',
        'Malik Nabers': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/w3edoyyuomqlovvp9ixc',
        'Tyrone Tracy Jr.': 'https://static.www.nfl.com/image/upload/t_player_profile_landscape/f_auto/league/hc2uk0xrbc6qizrerwxd'

    };



   

    useEffect(() => {
       setPlayers(playersData); // Use preloaded JSON instead of API calls
    }, []);

    // Create a new draft
    //const createDraft = () => {
     //   axios.post('http://127.0.0.1:5000/drafts', {
     //       type: draftType,
     //       participants: participants
     //   })
     //       .then(response => {
    ///           setDrafts([...drafts, response.data]);
     //       })
     //       .catch(error => console.error(error));
   // };

    // Function to get team logo URL
    const getTeamLogo = (teamAbbreviation) => {
        return teamLogos[teamAbbreviation] || 'https://upload.wikimedia.org/wikipedia/commons/7/77/Logo_placeholder.png'; // Placeholder logo if not found
    };


    //const getPlayerImage = (playerName) => {
     //   return playerImages[playerName] || 'https://example.com/default-player.jpg'; // Fallback image
    //};

    const getTeamColor = (teamAbbreviation) => {
        return teamColors[teamAbbreviation] || '#333'; // Default to dark gray if not found
    };







    const handleCreateDraft = () => {
        localStorage.setItem('draftType', draftType);
        localStorage.setItem('participants', participants);
        window.location.href = '/ghFantasySite/mock-draft.html'; // Direct static navigation
    };

    const handleDraftTypeChange = (e) => setDraftType(e.target.value);
    const handleParticipantsChange = (e) => setParticipants(e.target.value);

    const MockDraft = ({ match }) => {
        const { draftType, participants } = match.params;

        return (
            <div className="mock-draft-container">
                <h2>Starting {draftType} Draft with {participants} participants</h2>
                {/* Add your mock draft logic here */}
            </div>
        );
    };


    return (
        <div className="home-container">
            {/* Draft Creation Section */}
            <div className="draft-creation">
                <h2>Create Draft</h2>
                <select value={draftType} onChange={handleDraftTypeChange}>
                    <option value="salary">Salary Cap</option>
                    <option value="best_ball">Best Ball</option>
                </select>
                <input
                    type="number"
                    value={participants}
                    onChange={handleParticipantsChange}
                    min="2"
                    max="12"
                />
                <Link to={`/mock-draft/${draftType}/${participants}`}>
                    <button>Create Draft</button>
                </Link>
            </div>

            {/*  Players Table */}
            <div className="players-list">
                <h2>Players</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Position</th>
                            <th>Team</th>
                            <th>2024 Points</th>
                            <th>2025 Projection</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            players.map((player, index) => (
                            <tr key={player.id || index}>
                                <td>{index + 1}</td>
                                <td className="player-cell">
                                    <div className="player-image-container">
                                        <img
                                            src={getPlayerImage(player.name)}
                                            alt={player.name}
                                            className="player-image"
                                        />
                                        <div
                                            className="player-name-overlay"
                                            style={{ backgroundColor: getTeamColor(player.team) }}
                                        >
                                            {player.name}
                                        </div>
                                    </div>
                                </td>
                                <td>{player.position}</td>
                                <td style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <span>{player.team}</span>
                                    <span
                                        style={{
                                            color: teamData[player.team]?.color || '#333',
                                            fontWeight: 'bold',
                                            fontSize: '16px',

                                        /*src={getTeamLogo(player.team)}
                                        alt={`${player.team} logo`}
                                        style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                                    />*/}}
                                    >
                                        {teamData[player.team]?.name || 'Unknown Team'}
                                    </span>
                                </td>
                                <td>{player.points_2024}</td>
                                <td>{player.points_2025}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mock-draft/:draftType/:participants" element={<MockDraft />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rankings" element={<Rankings />} />
                    <Route path="/positional-rankings" element={<PositionalRankings />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;