import { week } from "../../data/week6";

function Matches() {

  return (
    <section className="partidos section" id="partidos">
      <h2 className="section__title">Partidos</h2>
      <span className="section__subtitle">Semana 6</span>
      <div className="match__content">
        {week.map((w, index) => {
          return (
            <div key={index} className="match__card">
              <table className="match__table">
                <tbody>
                  <tr className="match__table-header"></tr>
                  <tr>
                    <td className="match__table-top"></td>
                  </tr>
                  <tr>
                    <td colSpan={3}></td>
                    <td rowSpan={5} className="match__table-bar"></td>
                    <td rowSpan={5} className="match__table-date">
                      <div className="match__content-date">
                        <div>
                          <div className="match__data-date">
                            <div className="match__text-date">
                              {w.date}
                            </div>
                            <div className="match__text-time">{w.venue}</div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                  </tr>
                  <tr className="match__content-teams">
                    <td className="match__data-img">
                      <img className="match__img" src={w.homeTeam.img} alt="" />
                    </td>
                    <td className="match__data-name">
                      <div className="match__score">{w.homeTeam.score}</div>
                      <div className="match__name">
                        <span>{w.homeTeam.name}</span>
                      </div>
                    </td>
                    <td className="match__content-icon">
                      <svg className="match__icon" aria-label="Winner" height={8} role="img" width={6} style={ w.homeTeam.score < w.awayTeam.score ? {display : 'none'} : {display : 'block'} }>
                        <polygon fill="#000" points="6,0 6,8 0,4"></polygon>
                      </svg>    
                    </td>
                    <td className="match__content-separator"></td>
                  </tr>
                  <tr className="match__content-teams">
                    <td className="match__data-img">
                      <img className="match__img" src={w.awayTeam.img} alt="" />
                    </td>
                    <td className="match__data-name">
                      <div className="match__score">{w.awayTeam.score}</div>
                      <div className="match__name">
                        <span>{w.awayTeam.name}</span>
                      </div>
                    </td>
                    <td className="match__content-icon">
                      <svg className="match__icon" aria-label="Winner" height={8} role="img" width={6} style={ w.homeTeam.score > w.awayTeam.score ? {display : 'none'} : {display : 'block'} }>
                        <polygon fill="#000" points="6,0 6,8 0,4"></polygon>
                      </svg>    
                    </td>
                  </tr>
                  <tr>
                    <td className="match__content-footer"></td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Matches;
