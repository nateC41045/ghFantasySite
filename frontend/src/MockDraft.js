import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DraftBoard from "./DraftBoard";
import PlayerPool from "./PlayerPool";
import playersData from "./players.json";

const MockDraft = () => {
    const { draftType, participants } = useParams();
    const numParticipants = parseInt(participants) || 10; // Default to 10 participants if undefined
    const totalPicks = numParticipants * 10; // Example: 10 rounds
    const [teams, setTeams] = useState([]);
    const [playerPool, setPlayerPool] = useState(playersData || []); // Ensure playerPool is always an array
    const [currentPick, setCurrentPick] = useState(0);
    const[auctionState, setAuctionState] = useState(null); // Tracks current auction in salary cap drafts

    useEffect(() => {
        initializeDraft();
    }, []);

    const initializeDraft = () => {
        if (!numParticipants) return;

        let tempTeams = Array.from({ length: numParticipants }, (_, i) => ({
            id: i + 1,
            name: `Team ${i + 1}`,
            players: [],
            budget: 200, // For salary cap draft
        }));

        setTeams(tempTeams);
    };

    const handleSelectPlayer = (player) => {
        if (currentPick >= numParticipants * 10) return; // Prevent out-of-bounds picks

        setTeams((prevTeams) => {
            const updatedTeams = [...prevTeams];
            const teamIndex = currentPick % numParticipants;

            updatedTeams[teamIndex].players.push(player);

            return updatedTeams;
        });

        setPlayerPool((prevPool) => prevPool.filter((p) => p.id !== player.id)); // Remove selected player
        setCurrentPick((prevPick) => prevPick + 1);
    };

    return (
        <div className="mock-draft-container">
            <h2>{draftType} Draft</h2>
            {teams.length === 0 ? (
                <p>Loading draft...</p>
            ) : (
                <>
                    <DraftBoard teams={teams} />
                    <PlayerPool players={playerPool} onSelectPlayer={handleSelectPlayer} />
                </>
            )}
        </div>
    );
};

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