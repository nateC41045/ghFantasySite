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

import React from "react";



const DraftBoard = ({ teams = [] }) => {  // ?? Default teams to an empty array
    return (
        <div className="draft-board">
            <h3>Draft Board</h3>
            {teams.length === 0 ? (
                <p>Loading draft teams...</p>
            ) : (
                <div className="teams-list">
                    {teams.map((team) => (
                        <div key={team.id} className="team">
                            <h4>{team.name} (Budget: ${team.budget})</h4>
                            <ul>
                                {team.players.length > 0 ? (
                                    team.players.map((player, index) => (
                                        <li key={index}>{player.name}</li>
                                    ))
                                ) : (
                                    <li>No players drafted yet.</li>
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DraftBoard;