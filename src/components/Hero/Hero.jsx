import './Hero.scss';

function Hero({description}) { //cria a função do hero
  return (
    <section id="intro">
    <h1>Nat<span className="h1a">halie</span> <span className="h1b">Drabik</span></h1>
    <p>{description}</p>
  </section>
  );
}

export default Hero; //exporta a função do hero
