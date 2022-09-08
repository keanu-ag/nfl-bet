import React, { useState, useEffect } from "react";
import axios from "axios";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = async () => {
    const res = await axios.get("http://127.0.0.1:8000/teams/list");
    setTeams(res.data);
  };

  return <div>
    Teams Works!
    {/* {teams.map((team) => (
        <p key={team.id}> {team.name}</p>
    ))} */}
  </div>;
}

export default Teams;
