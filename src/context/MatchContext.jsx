import { createContext } from "react";
import { useState, useEffect } from "react";
import { week1 } from "../data/week1";

export const MatchContext = createContext();

export function MatchContextProvider(props) {
  const [matches, setMatches] = useState([]),
    [playing, setPlaying] = useState(true),
    [bets, setBets] = useState([]),
    [name, setName] = useState("");

  function changePlaying(stat) {
    setPlaying(stat);
  }

  function addBet(match_id, team_id) {
    var flg = false;
    if(bets.length !== 0){
      for (let i = 0; i < bets.length; i++) {
        const element = bets[i];
        if(element.match_id === match_id){
          bets[i].team_id = team_id;
          flg = true;
        }
      }

      if(!flg){
        setBets([...bets, {
          match_id: match_id,
          team_id: team_id,
        }]);
      }
    }else{
      setBets([...bets, {
        match_id: match_id,
        team_id: team_id,
      }]);
    }

    return bets;
  }

  function changeName(fullN){
    setName(fullN);
  }

  useEffect(() => {
    setMatches(week1);
  }, []);

  return (
    <MatchContext.Provider
      value={{ matches, playing, bets, name, changePlaying, addBet, changeName}}
    >
      {props.children}
    </MatchContext.Provider>
  );
}
