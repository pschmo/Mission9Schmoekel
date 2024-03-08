import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import Team from "./TeamTypes";
import teamsData from "./CollegeBasketballTeams.json"; // Import the JSON file

function Heading() {
  return (
    <div>
      <h1>March Madness is upon us!! Check out all the teams</h1>
    </div>
  );
}

function TeamList() {
  console.log("Teams data:", teamsData.teams);
  return (
    <div>
      <h2>Starting from the top!</h2>
      {teamsData.teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Heading />
      <TeamList />
    </div>
  );
}

export default App;
