//import React from 'react';

//const DraftBoard = ({ picks, participants }) => {
   // return (
      //  <div className="draft-board">
         //  <h2>Draft Board</h2>
          //  <div className="draft-grid">
           //     {picks.map((pick, index) => (
            //        <div key={index} className="draft-pick">
          //              <strong>{pick.round}.{pick.pick}</strong> - {pick.player || "Waiting..."}
             //       </div>
            //    ))}
          //  </div>
        //</div>
    //);
//};

//export default DraftBoard;

//import React from "react";

//const DraftBoard = ({ teams = [] }) => {  // ?? Default teams to an empty array
  //  return (
    //    <div className="draft-board">
       //     <h3>Draft Board</h3>
         //   {teams.length === 0 ? (
        //        <p>Loading draft teams...</p>
      //      ) : (
  //              <div className="teams-list">
    //                {teams.map((team) => (
           //             <div key={team.id} className="team">
             //               <h4>{team.name} (Budget: ${team.budget})</h4>
         //                   <ul>
       //                         {team.players.length > 0 ? (
      //                              team.players.map((player, index) => (
      //                                  <li key={index}>{player.name}</li>
      //                              ))
       //                         ) : (
      //                              <li>No players drafted yet.</li>
      //                          )}
      //                      </ul>
      //                  </div>
     //               ))}
     //           </div>
     //       )}
       // </div>
   // );
//};

//export default DraftBoard;




import React from "react";
import "./DraftBoard.css"; // Import styles
import playersData from "./players.json";

const DraftBoard = ({ teams, draftType, currentTeam }) => {
    return (
        <div className="draft-board">

            
            <h3>{draftType === "salary" ? "Auction Draft Board" : "Best Ball Draft Board"}</h3>
            <div className="teams-container">
                {teams.map(team => (
                    <div
                        key={team.id}
                        className={`team-card ${currentTeam && currentTeam.id === team.id ? "active-team" : ""}`}
                    >
                        <h4>{team.name}</h4>
                        {draftType === "auction" && <p>Budget: ${team.budget}</p>}
                        <div className="player-list">
                            {team.players.length > 0 ? (
                                team.players.map(player => {
                                    // ?? Debugging: Log player data to check if points2024 exists
                                    console.log("Drafted Player Data:", player);

                                    return (
                                        <div key={player.id} className="player-card">
                                            <p><strong>{player.name}</strong></p>
                                            <p>Position  {player.position}</p>
                                            <p>2024 Points  {player.points_2024}</p>
                                            {draftType === "auction" && <p>Price: ${player.price}</p>}
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="no-players">No players drafted yet</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DraftBoard;
/*
import React from "react";

const DraftBoard = ({ teams, draftType }) => {
    return (
        <div className="draft-board">
            <h3>{draftType === "auction" ? "Auction Draft Board" : "Best Ball Draft Board"}</h3>
            {teams.map(team => (
                <div key={team.id} className="team">
                    <h4>{team.name}</h4>
                    <ul>
                      
                        {Array.isArray(team.players) && team.players.length > 0 ? (
                            team.players.map((player, index) => (
                                <li key={`${team.id}-${player.id || index}`}>{player.name}</li>
                            ))
                        ) : (
                            <p>No players drafted yet</p>
                        )}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default DraftBoard; */

//Below is last used working draftBoard fucntion
//import React from "react";

//const DraftBoard = ({ teams, currentPick, draftType }) => {
  //  return (
     //   <div className="draft-board">
    //        <h3>Draft Board</h3>
    //        {teams.map((team) => (
  //              <div key={team.id} className="team-box">
  //                  <h4>{team.name} {draftType === "auction" ? `(Budget: $${team.budget})` : ""}</h4>
 //                   <ul>
 //                       {team.players.map((player, index) => (
 //                           <li key={index}>{player.name}</li>
 //                       ))}
  //                  </ul>
 //               </div>
 //           ))}
 //           <p>Current Pick: {currentPick + 1}</p>
 //       </div>
 //   );
//};

//export default DraftBoard;