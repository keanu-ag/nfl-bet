import MatchList from "./components/MatchList";
import MatchHeader from "./components/MatchHeader";
import MatchPlayerName from "./components/MatchPlayerName";
import Teams from "./components/Teams";

function App() {
  return (
    <main className="bg-white">
      <div className="container mx-auto p-10">
        <MatchHeader />
        <MatchPlayerName />
        <MatchList />
        <Teams />
      </div>
    </main>
  );
}

export default App;
