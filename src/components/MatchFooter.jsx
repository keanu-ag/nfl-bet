function MatchFooter() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div className="footer_head">
            <h1 className="footer__title">(!)</h1>
            <span className="footer__subtitle">Quiniela NFL 2022</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#quiniela" className="footer__link">
                Quiniela
              </a>
            </li>
            <li>
              <a href="#partidos" className="footer__link">
                Partidos
              </a>
            </li>
            <li>
              <a href="#apuestas" className="footer__link">
                Mis apuestas
              </a>
            </li>
            <li>
              <a href="#resultados" className="footer__link">
                Resultados
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/"
              className="footer__social"
              target="blank"
            >
              <i className="uil uil-facebook-f"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              className="footer__social"
              target="blank"
            >
              <i className="uil uil-instagram"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="footer__social"
              target="blank"
            >
              <i className="uil uil-twitter-alt"></i>
            </a>
          </div>
        </div>

        <p className="footer__copy">
          &#169; (!)Dev. Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default MatchFooter;
