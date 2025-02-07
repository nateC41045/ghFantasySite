import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DraftSettings = () => {
    const [draftType, setDraftType] = useState("salary");
    const [participants, setParticipants] = useState(12);
    const [userPick, setUserPick] = useState(1);
    const navigate = useNavigate();

    const startDraft = () => {
        navigate(`/mock-draft/${draftType}/${participants}/${userPick}`);
    };

    return (
        <div className="draft-settings">
            <h2>Draft Setup</h2>
            <label>Draft Type</label>
            <select value={draftType} onChange={(e) => setDraftType(e.target.value)}>
                <option value="salary">Salary Cap</option>
                <option value="best_ball">Best Ball</option>
            </select>

            <label>Number of Participants</label>
            <input type="number" value={participants} onChange={(e) => setParticipants(e.target.value)} min="2" max="12" />

            <label>Your Draft Position</label>
            <input type="number" value={userPick} onChange={(e) => setUserPick(e.target.value)} min="1" max={participants} />

            <button onClick={startDraft}>Start Draft</button>
        </div>
    );
};

export default DraftSettings;