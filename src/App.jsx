import React from "react";

import MatchList from "./components/quiniela/MatchList";
import MatchHeader from "./components/MatchHeader";
import MatchPlayerName from "./components/quiniela/MatchPlayerName";
import Bets from "./components/apuestas/Bets";
import Matches from "./components/partidos/Matches";
import Results from "./components/resultados/Results";
import MatchFooter from "./components/MatchFooter";

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
      <MatchFooter />
    </>
  );
}

export default App;
