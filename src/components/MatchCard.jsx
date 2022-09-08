import { useContext, useState, useEffect } from "react";
import { MatchContext } from "../context/MatchContext";

function MatchCard({ match }) {
  const { bets, addBet } = useContext(MatchContext);

  function toBet(match_id, team_id){
    var n = addBet(match_id, team_id);
  }

  return (
    <div className="bg-zinc-500 text-white rounded-md flex flex-row shadow-md sm:rounded-lg">
      <div className="w-full text-center pt-2">
        <img
          src={match.homeTeam.img}
          alt=""
          className="block ml-auto mr-auto"
        />
        <h1>{match.homeTeam.name}</h1>
        <input
          name={match.id}
          type="radio"
          id={match.homeTeam.team_id}
          onChange={() => {toBet(match.id, match.homeTeam.team_id)}}
        />
      </div>

      <h3 className="text-center font-bold pt-4">Vs</h3>

      <div className="w-full text-center pt-2">
        <img
          src={match.awayTeam.img}
          alt=""
          className="block ml-auto mr-auto"
        />
        <h1>{match.awayTeam.name}</h1>
        <input
          name={match.id}
          type="radio"
          id={match.awayTeam.team_id}
          onChange={() => {toBet(match.id, match.awayTeam.team_id)}}
        />
      </div>
    </div>
  );
}

export default MatchCard;
