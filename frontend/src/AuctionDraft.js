
import React, { useState, useEffect } from "react";

import DraftTicker from "./DraftTicker";





const AuctionDraft = ({ teams, playerPool, setPlayerPool }) => {
    const [currentPick, setCurrentPick] = useState(1);
    const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
    const [bidTimer, setBidTimer] = useState(10);
    const [nominatedPlayer, setNominatedPlayer] = useState(null);
    const [currentBid, setCurrentBid] = useState(null);

    useEffect(() => {
        if (bidTimer > 0 && nominatedPlayer) {
            const timer = setTimeout(() => setBidTimer(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [bidTimer, nominatedPlayer]);

    const handleNominate = (player) => {
        setNominatedPlayer(player);
        setCurrentBid({ player, amount: 1, highestBidder: null });
        setBidTimer(10);
    };

    const handleBid = (team) => {
        setCurrentBid(prev => ({
            ...prev,
            amount: prev.amount + 1,
            highestBidder: team
        }));
    };

    useEffect(() => {
        if (bidTimer === 0 && currentBid) {
            let winningTeam = currentBid.highestBidder;
            if (winningTeam) {
                winningTeam.players.push(currentBid.player);
                winningTeam.budget -= currentBid.amount;
                setPlayerPool(prev => prev.filter(p => p.id !== currentBid.player.id));
                setCurrentPick(prev => prev + 1);

                // Move to next team
                setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teams.length);
            }
            setNominatedPlayer(null);
        }
    }, [bidTimer]);

    return (
        <div>
            <DraftTicker
                currentPick={currentPick}
                totalPicks={teams.length * 5}
                currentTeam={teams[currentTeamIndex]}
            />
            {nominatedPlayer ? (
                <div>
                    <h3>Current Bid: {currentBid.amount} by {currentBid.highestBidder?.name || "No Bids"}</h3>
                    <p>Time Left: {bidTimer}s</p>
                    {teams.map(team => (
                        <button key={team.id} onClick={() => handleBid(team)}>
                            {team.name} Bid
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <h3>Nominate a Player</h3>
                    {playerPool.map(player => (
                        <button key={player.id} onClick={() => handleNominate(player)}>
                            {player.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AuctionDraft;
/*
const AuctionDraft = ({ teams, playerPool, setPlayerPool }) => {
    const [currentBid, setCurrentBid] = useState(null);
    const [bidTimer, setBidTimer] = useState(10);
    const [activeBidders, setActiveBidders] = useState(teams);
    const [nominatedPlayer, setNominatedPlayer] = useState(null);
    const [currentNominatingTeam, setCurrentNominatingTeam] = useState(0);

    useEffect(() => {
        if (bidTimer > 0 && nominatedPlayer) {
            const timer = setTimeout(() => setBidTimer(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [bidTimer, nominatedPlayer]);

    const handleNominate = (player) => {
        setNominatedPlayer(player);
        setCurrentBid({ player, amount: 1, highestBidder: null });
        setBidTimer(10);
    };

    const handleBid = (team) => {
        if (team.budget < currentBid.amount + 1) return; // Prevent bidding if out of budget

        setCurrentBid(prev => ({
            ...prev,
            amount: prev.amount + 1,
            highestBidder: team
        }));
    };

    useEffect(() => {
        if (bidTimer === 0 && currentBid) {
            let winningTeam = currentBid.highestBidder;
            if (winningTeam) {
                winningTeam.players.push(currentBid.player);
                winningTeam.budget -= currentBid.amount;
                setPlayerPool(prev => prev.filter(p => p.id !== currentBid.player.id));
            }
            setNominatedPlayer(null);
            moveToNextNominatingTeam(); // Move to the next team for nomination
        }
    }, [bidTimer]);

    const moveToNextNominatingTeam = () => {
        setCurrentNominatingTeam((prev) => (prev + 1) % teams.length);
    };

    useEffect(() => {
        if (!nominatedPlayer) {
            setTimeout(() => {
                const nextTeam = teams[currentNominatingTeam];
                if (nextTeam.isCPU) {
                    // CPU auto nominates a player
                    const randomPlayer = playerPool[Math.floor(Math.random() * playerPool.length)];
                    if (randomPlayer) handleNominate(randomPlayer);
                }
            }, 2000); // Delay before CPU nominates
        }
    }, [nominatedPlayer, currentNominatingTeam]);

    return (
        <div>
            <h2>Auction Draft</h2>
            {nominatedPlayer ? (
                <div>
                    <h3>Current Bid: {currentBid.amount} by {currentBid.highestBidder?.name || "No Bids"}</h3>
                    <p>Time Left: {bidTimer}s</p>
                    {activeBidders.map(team => (
                        <button key={team.id} onClick={() => handleBid(team)} disabled={team.budget < currentBid.amount + 1}>
                            {team.name} Bid (${team.budget} left)
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <h3>{teams[currentNominatingTeam].name} is nominating...</h3>
                    {teams[currentNominatingTeam].isCPU ? (
                        <p>CPU is choosing a player...</p>
                    ) : (
                        playerPool.map(player => (
                            <button key={player.id} onClick={() => handleNominate(player)}>
                                {player.name}
                            </button>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default AuctionDraft; */

/*
import React, { useState, useEffect } from 'react';

const AuctionDraft = ({ teams, playerPool, setPlayerPool }) => {
    const [currentBid, setCurrentBid] = useState(null);
    const [bidTimer, setBidTimer] = useState(10);
    const [activeBidders, setActiveBidders] = useState(teams);
    const [nominatedPlayer, setNominatedPlayer] = useState(null);

    useEffect(() => {
        if (bidTimer > 0 && nominatedPlayer) {
            const timer = setTimeout(() => setBidTimer(prev => prev - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [bidTimer, nominatedPlayer]);

    const handleNominate = (player) => {
        setNominatedPlayer(player);
        setCurrentBid({ player, amount: 1, highestBidder: null });
        setBidTimer(10);
    };

    const handleBid = (team) => {
        setCurrentBid(prev => ({
            ...prev,
            amount: prev.amount + 1,
            highestBidder: team
        }));
    };

    useEffect(() => {
        if (bidTimer === 0 && currentBid) {
            let winningTeam = currentBid.highestBidder;
            if (winningTeam) {
                winningTeam.players.push(currentBid.player);
                winningTeam.budget -= currentBid.amount;
                setPlayerPool(prev => prev.filter(p => p.id !== currentBid.player.id));
            }
            setNominatedPlayer(null);
        }
    }, [bidTimer]);

    return (
        <div>
            <h2>Auction Draft</h2>
            {nominatedPlayer ? (
                <div>
                    <h3>Current Bid: {currentBid.amount} by {currentBid.highestBidder?.name || "No Bids"}</h3>
                    <p>Time Left: {bidTimer}s</p>
                    {activeBidders.map(team => (
                        <button key={team.id} onClick={() => handleBid(team)}>
                            {team.name} Bid
                        </button>
                    ))}
                </div>
            ) : (
                <div>
                    <h3>Nominate a Player</h3>
                    {playerPool.map(player => (
                        <button key={player.id} onClick={() => handleNominate(player)}>
                            {player.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AuctionDraft; */