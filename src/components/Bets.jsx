function Bets() {
  return (
    <section className="home section" id="apuestas">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__title">
            <h1>Mis apuestas</h1>
          </div>
          <div className="home__register">
            <select name="betsList" id="bets">
              <option value="0">-- Todos --</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bets;
