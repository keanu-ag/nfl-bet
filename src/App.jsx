import React from "react";

import MatchList from "./components/MatchList";
import MatchHeader from "./components/MatchHeader";
import MatchPlayerName from "./components/MatchPlayerName";
import Bets from "./components/Bets";
import Matches from "./components/Matches";
import Results from './components/Results'

function App() {
  return (
    <>
      <MatchHeader />
      <main className="main">
        <MatchPlayerName />
        <MatchList />
        <Matches />
        <Bets />
        <Results />
      </main>
    </>
  );
}

export default App;
