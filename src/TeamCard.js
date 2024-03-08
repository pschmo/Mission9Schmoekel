// src/TeamCard.js
import React from "react";
import "./TeamCard.css";

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <h3 className="team-name">{team.school}</h3>
      <p className="team-info">Mascot: {team.name}</p>
      <p className="team-info">
        Location: {team.city}, {team.state}
      </p>
    </div>
  );
}

export default TeamCard;
