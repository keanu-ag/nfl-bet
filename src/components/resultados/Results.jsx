import { useEffect, useState } from "react";
import axios from "axios";
import { results } from "../../data/week2";
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
        url: "http://nfl-bet/players/list",
        method: "GET",
      });
      setPlayers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  async function handleChange(e) {
      try {
        const res = await axios.get("http://nfl-bet/bet/results/" + e);
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
    <section className="resultados sections" id="resultados">
    <h2 className="section__title">Resultados</h2>
    <span className="section__subtitle">Semana 2</span>      
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
                    if(e !== null){
                      handleChange(e.value);
                    }else{
                      setTeams([]);
                    }
                  }}
                />
              </div>

              <table className="results__table">
                <thead className="results__table-header">
                  <tr>
                    <td colSpan={16}>Quiniela</td>
                    <td>Total</td>
                  </tr>
                </thead>
                <tbody className="results__table-body">
                  <tr>
                    {teams.length !== 0 ? (
                      <>
                        <td>{teams[0].name}</td>
                        <td>{teams[1].name}</td>
                        <td>{teams[2].name}</td>
                        <td>{teams[3].name}</td>
                        <td>{teams[4].name}</td>
                        <td>{teams[5].name}</td>
                        <td>{teams[6].name}</td>
                        <td>{teams[7].name}</td>
                        <td>{teams[8].name}</td>
                        <td>{teams[9].name}</td>
                        <td>{teams[10].name}</td>
                        <td>{teams[11].name}</td>
                        <td>{teams[12].name}</td>
                        <td>{teams[13].name}</td>
                        <td>{teams[14].name}</td>
                        <td>{teams[15].name}</td>
                        <td style={{ border: "1px solid #FFF" }}>16</td>
                      </>
                    ) : (
                      <td style={{ border: "1px solid #FFF" }}>0</td>
                    )}
                  </tr>

                  <tr>
                    {teams.length !== 0 ? (
                      <>
                        <td> {teams[0].id === results[0].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[0].id === results[0].team_id ? sum = sum + 1 : ''}</p> </td> 
                        <td> {teams[1].id === results[1].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[1].id === results[1].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[2].id === results[2].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[2].id === results[2].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[3].id === results[3].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[3].id === results[3].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[4].id === results[4].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[4].id === results[4].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[5].id === results[5].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[5].id === results[5].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[6].id === results[6].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[6].id === results[6].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[7].id === results[7].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[7].id === results[7].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[8].id === results[8].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[8].id === results[8].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[9].id === results[9].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[9].id === results[9].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[10].id === results[10].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[10].id === results[10].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[11].id === results[11].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[11].id === results[11].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[12].id === results[12].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[12].id === results[12].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[13].id === results[13].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[13].id === results[13].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[14].id === results[14].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[14].id === results[14].team_id ? sum = sum + 1 : ''}</p> </td>
                        <td> {teams[15].id === results[15].team_id ? 1 : 0} <p style={{display: 'none'}}>{teams[15].id === results[15].team_id ? sum = sum + 1 : ''}</p> </td>
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
