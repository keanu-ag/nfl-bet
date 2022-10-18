import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Bets() {
  const [playerBets, setPlayerBets] = useState([]);
  var tm = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  async function handleStart() {
    try {
      const res = await axios.get("/my/bets");
      let data = res.data;
      setPlayerBets(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <section className="apuestas section" id="apuestas">
      <h2 className="section__title">Apuestas</h2>
      <span className="section__subtitle">Semana 6</span>
      {playerBets.length !== 0 ? (
        <div className="bets__content">
          <div className="bets__container">
            {playerBets.map((bets, index) => (
              <div key={index} className="player__bets">
                <h3 className="players__bets-player">{bets.player}</h3>
                <div className="players__bets-card">
                  {Object.values(bets).map((bet, i) => {
                    return (
                      <div key={i} className="player__card">
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
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default Bets;
