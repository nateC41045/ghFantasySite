import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DraftBoard from "./DraftBoard";
import PlayerPool from "./PlayerPool";
import playersData from "./players.json";

const MockDraft = () => {
    const { draftType, participants } = useParams();
    const numParticipants = parseInt(participants) || 10; // Default to 10 participants if undefined
    const totalPicks = numParticipants * 10; // Example: 10 rounds
    const rounds = 10; // Example: 10 rounds

    const [teams, setTeams] = useState([]);
    const [playerPool, setPlayerPool] = useState(playersData || []); // Ensure playerPool is always an array
    const [currentPick, setCurrentPick] = useState(0);
    const[auctionState, setAuctionState] = useState(null); // Tracks current auction in salary cap drafts
    const[draftOrder, setDraftOrder] = useState([]);


    useEffect(() => {
        initializeDraft();
    }, []);

    const initializeDraft = () => {
        if (!numParticipants) return;

        // Create teams
        let tempTeams = Array.from({ length: numParticipants }, (_, i) => ({
            id: i + 1,
            name: `Team ${i + 1}`,
            players: [],
        }));

        setTeams(tempTeams);

        // Generate the full snake draft order
        let order = [];
        for (let round = 0; round < rounds; round++) {
            if (round % 2 === 0) {
                // Normal order
                order.push(...tempTeams.map(team => team.id));
            } else {
                // Reverse order
                order.push(...tempTeams.map(team => team.id).reverse());
            }
        }

        setDraftOrder(order);
    };

    /*
    const handleSelectPlayer = (player) => {
        // Ensure that player selection only happens in the appropriate draft
        if (!teams || teams.length === 0) return;

        if (draftType === "auction") {
            // Handle Auction Draft Logic (bidding)
            if (auctionState.currentBidder) {
                const selectedTeam = teams.find(team => team.id === auctionState.currentBidder);
                if (selectedTeam && selectedTeam.budget >= auctionState.bidAmount) {
                    selectedTeam.players.push(player);
                    selectedTeam.budget -= auctionState.bidAmount;
                    setTeams([...teams]);
                    setPlayerPool(prevPool => prevPool.filter(p => p.id !== player.id)); // Remove selected player from pool
                    setAuctionState({ currentBidder: null, bidAmount: null }); // Reset auction state
                }
            }
        } else {
            // Handle Non-Auction Draft (Snake Draft or Best Ball)
            if (currentPick < totalPicks) {
                const updatedTeams = [...teams];
                const currentTeamIndex = currentPick % numParticipants;

                if (!updatedTeams[currentTeamIndex]) {
                    console.error("Team is undefined at index", currentTeamIndex);
                    return;
                }

                updatedTeams[currentTeamIndex].players.push(player);
                setTeams(updatedTeams);
                setPlayerPool(prevPool => prevPool.filter(p => p.id !== player.id)); // Remove player from pool
                setCurrentPick(currentPick + 1);
            }
        }
    };
    */
    const handleAuctionBid = (teamId, bidAmount) => {
        // Set the current bidder and bid amount for auction
        if (draftType === "auction") {
            setAuctionState({ currentBidder: teamId, bidAmount });
        }
    };


    const handleSelectPlayer = (player) => {
        if (currentPick >= totalPicks) return; // Stop once the draft is done

        const currentTeamId = draftOrder[currentPick];
        const updatedTeams = teams.map(team =>
            team.id === currentTeamId ? { ...team, players: [...team.players, player] } : team
        );

        setTeams(updatedTeams);
        setPlayerPool(prevPool => prevPool.filter(p => p.id !== player.id));
        setCurrentPick(currentPick + 1); // Move to next pick
    };
    /*
    const handleSelectPlayer = (player) => {
        if (!teams.length) return;

        if (draftType === "auction") {
            startAuction(player);
            return;
        }

        // Best Ball Draft Logic
        if (currentPick < totalPicks) {
            const updatedTeams = [...teams];
            const currentTeamIndex = currentPick % numParticipants;

            updatedTeams[currentTeamIndex].players.push(player);
            setTeams(updatedTeams);
            setPlayerPool(prevPool => prevPool.filter(p => p.id !== player.id));
            setCurrentPick(currentPick + 1);
        }
    }; */

    const startAuction = (player) => {
        setAuctionState({
            player,
            highestBid: 1, // Starting bid
            highestBidder: null,
            timeLeft: 10, // Example: 10 seconds for bidding
        });



        // Start countdown timer
        const auctionInterval = setInterval(() => {
            setAuctionState(prevState => {
                if (!prevState || prevState.timeLeft <= 1) {
                    clearInterval(auctionInterval);
                    finalizeAuction();
                    return null;
                }
                return { ...prevState, timeLeft: prevState.timeLeft - 1 };
            });
        }, 1000);
    };


    const finalizeAuction = () => {
        if (!auctionState || !auctionState.highestBidder) return;

        setTeams(prevTeams => {
            return prevTeams.map(team => {
                if (team.id === auctionState.highestBidder) {
                    return {
                        ...team,
                        players: [...team.players, auctionState.player],
                        budget: team.budget - auctionState.highestBid,
                    };
                }
                return team;
            });
        });

        setPlayerPool(prevPool => prevPool.filter(p => p.id !== auctionState.player.id));
        setAuctionState(null);
        setCurrentPick(currentPick + 1);
    };


    const placeBid = (teamId) => {
        setAuctionState(prevState => {
            if (!prevState) return prevState;

            const team = teams.find(t => t.id === teamId);
            if (!team || team.budget <= prevState.highestBid) return prevState;

            return {
                ...prevState,
                highestBid: prevState.highestBid + 1,
                highestBidder: teamId,
            };
        });
    };
    
    /*
    const handleSelectPlayer = (player) => {
        console.log("Before selection - playerPool:", playerPool);
        if (!teams || teams.length === 0) return; // Prevent accessing undefined

        if (draftType === "auction") return; // Skip for auction

        if (currentPick < totalPicks) {
            const updatedTeams = [...teams];
            const currentTeamIndex = currentPick % numParticipants;

            if (!updatedTeams[currentTeamIndex]) {
                console.error("Team is undefined at index", currentTeamIndex);
                return;
            }

            updatedTeams[currentTeamIndex].players.push(player);

            setTeams(updatedTeams);
            setPlayerPool(prevPool => prevPool.filter(p => p.id !== player.id)); // Remove only selected player
            setCurrentPick(currentPick + 1);

            console.log("After selection - playerPool:", playerPool);
        }
    };
    */
    return (
        <div className="mock-draft-container">
            <h2>{draftType === "salary" ? "Auction Draft" : "Best Ball Draft"}</h2>

            {teams.length > 0 ? (
                <>
                    <DraftBoard teams={teams} draftType={draftType} placeBid={placeBid} auctionState={auctionState} />
                    <PlayerPool playerPool={playerPool} onSelectPlayer={handleSelectPlayer} />
                </>
            ) : (
                <p>Loading draft...</p>
            )}

            {auctionState && (
                <div className="auction-panel">
                    <h3>Auction in Progress</h3>
                    <p>Player: {auctionState.player.name}</p>
                    <p>Current Bid: ${auctionState.highestBid}</p>
                    <p>Time Left: {auctionState.timeLeft}s</p>
                    <div>
                        {teams.map(team => (
                            <button key={team.id} onClick={() => placeBid(team.id)} disabled={team.budget <= auctionState.highestBid}>
                                {team.name} Bid (${team.budget} left)
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

   /*
    return (
        <div className="mock-draft-container">
            <h2>{draftType === "auction" ? "Auction Draft" : "Best Ball Draft"}</h2>

            {teams.length > 0 ? (
                <>
                    <DraftBoard teams={teams} draftType={draftType} />
                    <PlayerPool playerPool={playerPool} onSelectPlayer={handleSelectPlayer} />
                </>
            ) : (
                <p>Loading draft...</p> // Prevents accessing teams before initialization
            )}
        </div>
    );
};
*/

export default MockDraft;



//const MockDraft = () => {
 //   const { draftType, participants } = useParams();
 //   const numParticipants = parseInt(participants);



  //  const totalPicks = numParticipants * 10; // Example: 10 rounds
 //   const [picks, setPicks] = useState(Array.from({ length: totalPicks }, (_, i) => ({
    //    round: Math.floor(i / numParticipants) + 1,
    //    pick: (i % numParticipants) + 1,
   //     player: null
  //  })));
  //  const [currentPick, setCurrentPick] = useState(0);

    //const handleSelectPlayer = (player) => {
  //      if (currentPick < totalPicks) {
            //setPicks((prevPicks) => {
                //const updatedPicks = [...prevPicks];
              //  updatedPicks[currentPick].player = player.name;
            //    return updatedPicks;
          //  });
        //    setCurrentPick(currentPick + 1);
      //  }
    //};

    //return (
       // <div className="mock-draft-container">
          //  <h2>{draftType} Draft</h2>
        //    <DraftBoard picks={picks} participants={numParticipants} />
      //      <PlayerPool onSelectPlayer={handleSelectPlayer} />
    //    </div>
  //  );
//};

//export default MockDraft;