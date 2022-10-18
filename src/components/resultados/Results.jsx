import { useEffect, useState } from "react";
import axios from "axios";
import { results } from "../../data/week6";
import Select from "react-select";

function Results() {
  const [name, setName] = useState(""),
    [players, setPlayers] = useState([]),
    [teams, setTeams] = useState([]);

  var sum = 0;

  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "#FFF",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? "#576EE0" : isSelected ? "#576EE0" : undefined,
      color: "black",
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };

  const handleStart = async () => {
    try {
      const res = await axios({
        url: "/players/list",
        method: "GET",
      });
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleChange(e) {
    try {
      const res = await axios.get("/bet/results/" + e);
      let data = res.data;
      setTeams(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <section className="resultados section" id="resultados">
      <h2 className="section__title">Resultados</h2>
      <span className="section__subtitle">Semana 6</span>
      <div className="home__container grid">
        <div className="home__content grid">
          <div className="home__results">
            <div className="result__data">
              <div className="result__content">
                  <Select
                    placeholder={"Selecciona un jugador"}
                    options={players}
                    styles={colourStyles}
                    className="result__input"
                    isClearable={true}
                    onChange={(e) => {
                      if (e !== null) {
                        handleChange(e.value);
                      } else {
                        setTeams([]);
                      }
                    }}
                  />

              </div>

              <table className="results__table">
                <thead className="results__table-header">
                  <tr>
                    <td colSpan={14}>Quiniela</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody className="results__table-body">
                  <tr>
                    {teams.length !== 0 ? (
                      <>
                        {teams.map((team, index) => {
                          return <td key={index}>{team.name}</td>;
                        })}
                        <td style={{ border: "1px solid #FFF" }}>14</td>
                      </>
                    ) : (
                      <td style={{ border: "1px solid #FFF" }}>0</td>
                    )}
                  </tr>

                  <tr>
                    {teams.length !== 0 ? (
                      <>
                        {teams.map((team, index) => {
                          return (
                            <td key={index}>
                              {" "}
                              {team.id === results[index].team_id ? 1 : 0}{" "}
                              <p style={{ display: "none" }}>
                                {team.id === results[index].team_id
                                  ? (sum = sum + 1)
                                  : ""}
                              </p>{" "}
                            </td>
                          );
                        })}
                        <td style={{ border: "1px solid #FFF" }}>{sum}</td>
                      </>
                    ) : (
                      <td style={{ border: "1px solid #FFF" }}>0</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
