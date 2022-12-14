import UilMoon from "@iconscout/react-unicons/icons/uil-moon";

function MatchHeader() {
  return (
    <header className="header" id="header">
      <nav className="nav container__pg">
        <a className="nav__logo">
          <img
            src="data:image/png;base64,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"
            alt="nfl_img"
          />
          <h1>NFL 2022</h1>
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#quiniela" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Quiniela
              </a>
            </li>
            <li className="nav__item">
              <a href="#apuestas" className="nav__link">
                <i className="uil uil-user nav__icon"></i>Mis apuestas
              </a>
            </li>
            <li className="nav__item">
              <a href="#partidos" className="nav__link">
                <i className="uil uil-tag nav__icon"></i>Partidos
              </a>
            </li>
            <li className="nav__item">
              <a href="#resultados" className="nav__link">
                <i className="uil uil-puzzle-piece nav__icon"></i>Resultados
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="nav__btns">
          <UilMoon className="uil change-theme" id="theme-button" />
        </div> */}
      </nav>
    </header>
  );
}

export default MatchHeader;
