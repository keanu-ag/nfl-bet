import { useContext, useState, useEffect } from "react";
import { MatchContext } from "../context/MatchContext";

function MatchCard({ match }) {
  const { bets, addBet } = useContext(MatchContext),
    [clHT, setClHT] = useState("transparent"),
    [dHT, setDHT] = useState("none"),
    [clAT, setClAT] = useState("transparent"),
    [dAT, setDAT] = useState("none");

  function toBet(match_id, team_id) {
    var n = addBet(match_id, team_id);
  }

  function selectTeam(i){
    setClHT("transparent");
    setDHT("none");
    setClAT("transparent");
    setDAT("none");
    switch (i) {
      case 1:
        setClHT("#0b5e70");
        setDHT("block");
        break;
      case 3:
        setClAT("#236e7e");
        setDAT("block");
        break;
      default:
        break;
    }
  }

  return (
    <div className="card__content">
      <div
        className="card__data"
        style={{ backgroundColor: clHT }}
        onClick={(ev) => {
          selectTeam(1);
          toBet(match.id, match.homeTeam.team_id);
        }}
      >
        <img
          src={match.homeTeam.img}
          alt=""
          className="card__data-img"
        />
        <h1>{match.homeTeam.name}</h1>
        <div className="btn__get-team" style={{ display: dHT }}>
          🏈
        </div>
      </div>

      <div
        className="card__rotate">
        <div className="card__face card__front">
          <h3>Vs</h3>
        </div>
        <div className="card__face card__back">
          <h3>📅 {match.date} </h3>
          <h3> {match.venue} </h3>
        </div>
      </div>

      <div
        className="card__data"
        style={{ backgroundColor: clAT }}
        onClick={(ev) => {
          selectTeam(3);
          toBet(match.id, match.awayTeam.team_id);
        }}
      >
        <img
          src={match.awayTeam.img}
          alt=""
          className="card__data-img"
        />
        <h1>{match.awayTeam.name}</h1>
        <div className="btn__get-team" style={{ display: dAT }}>
          🏈
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
