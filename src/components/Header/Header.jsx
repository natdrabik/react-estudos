function Header() { //cria a função do header
  return (
    <article>
        <button id="btMenu">
            <span>Menu</span>
        </button>
        <nav id="menu">
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#about">Sobre</a></li>
                <li><a href="#skills">Habilidades</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#links">Links</a></li>
            </ul>
        </nav>
    </article>
  );
}

export default Header; //exporta a função do header
