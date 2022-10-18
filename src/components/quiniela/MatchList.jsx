import { useContext, useEffect, useState } from "react";
import { MatchContext } from "../../context/MatchContext";
import MatchCard from "./MatchCard";
import UilMessage from "@iconscout/react-unicons/icons/uil-message";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function MatchList() {
  const { matches, playing, bets, name, changePlaying } =
    useContext(MatchContext);
  const [playerBets, setPlayerBets] = useState([]);

  const [state, setState] = useState(true),
    [loading, setLoading] = useState("none"),
    [btnCont, setBtnCont] = useState("flex"),
    [style, setStyle] = useState("none");

  const MySwal = withReactContent(Swal);

  const handleSubmit = async () => {
    if (bets.length !== 14) {
      MySwal.fire({
        position: "top-end",
        title: "Error!",
        text: "Debes completar los partidos",
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      setBtnCont("none");
      setLoading("block");
      try {
        const response = await axios({
          url: "/create/bet",
          method: "POST",
          data: { bets, name },
        });

        const res = await axios.get("/bet/list/" + response.data);

        let data = res.data;
        setPlayerBets(data);
        setStyle("block");

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Bien!",
          text: "Tus resultados de la [Semana 6] se guardaron correctamente.",
          showConfirmButton: false,
          timer: 2400,
        });
        setBtnCont("flex");
        setLoading("none");
        changePlaying(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setState(playing);
  });

  if (matches.length === 0) {
    return <h1>No hay partidos publicados</h1>;
  }

  return (
    <div className="container grid">
      <div className="home__list" id="quiniela">
        <div>
          <h1 className="home__list-title">Semana 6 de 18</h1>
        </div>
        <div className="home__list-content">
          <div className="home__list-cards">
            {matches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
          <div className="home__list-cards__content">
            <button
              disabled={state}
              className="home__button disabled:bg-transparent disabled:text-black"
              onClick={handleSubmit}
            >
              <div style={{ display: btnCont }}>
                <UilMessage /> Enviar Quiniela
              </div>
              <div className="loader" style={{ display: loading }}></div>
            </button>

            {playerBets.length !== 0 ? (
              <>
                <div className="player__bets-title">
                  <h3>Los equipos que elegiste:</h3>
                </div>

                <div className="players__bets" style={{ display: style }}>
                  <h3 className="players__bets-player">
                    {playerBets[0].player}
                  </h3>
                  <div className="players__bets-card">
                    {playerBets.map((bet, index) =>
                      index !== 0 ? (
                        <div key={index} className="player__card">
                          <div className="player__card-img">
                            <img
                              src={bet.img}
                              alt=""
                              className="players__bets-img"
                            />
                          </div>
                          <div className="player__card-info">
                            <span>{bet.name}</span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchList;
