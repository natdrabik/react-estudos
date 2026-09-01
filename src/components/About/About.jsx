import './About.scss';

function About({ children }) {
  return (
    <section id="about">
      <h2>Sobre mim</h2>
      <div className="about">
        <div className="about__image">
          <img src="/images/nath2.png" alt="Nathalie Drabik" />
        </div>

        <div className="about__txt">
          {children}
        </div>
      </div>
    </section>
  );
}

export default About;