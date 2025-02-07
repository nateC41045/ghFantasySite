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

export default AuctionDraft;