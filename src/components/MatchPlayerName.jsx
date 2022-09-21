import UilFootballAmerican from "@iconscout/react-unicons/icons/uil-football-american";
import { useEffect, useState, useContext } from "react";
import { MatchContext } from "../context/MatchContext";

function MatchPlayerName() {
  const [state, setState] = useState(true),
    [localName, setLocalName] = useState(""),
    { changePlaying, changeName, name } = useContext(MatchContext);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <section className="home section" id="quiniela">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__title">
            <h1>Haz tus apuestas aquí</h1>
          </div>
          <div className="home__register">
            <input
              type="text"
              placeholder="Por favor ingrese su nombre completo"
              className="home__input"
              onChange={(e) => {
                changeName(e.target.value);
                if (e.target.value.length !== 0) {
                  setState(false);
                } else {
                  changePlaying(true);
                  setState(true);
                }
              }}
            />
            <button
              disabled={state}
              className="home__button disabled:bg-transparent disabled:text-black"
              onClick={() => {
                if (name.length !== 0) {
                  changePlaying(false);
                } else {
                  changePlaying(true);
                  setState(true);
                  alert("Debes ingresar un nombre para poder jugar");
                }
              }}
            >
              <UilFootballAmerican />
              Jugar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MatchPlayerName;
