// import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Projetos from "./components/Projetos/Projetos";
// import Footer from "./components/Footer/Footer";
// import './App.scss'

function App() {
  return (
    <>
      <article>
        <Hero
        description="Front-End Developer com background em Design Gráfico, localizada em Curitiba, Paraná."
      />
        <About>
          <p>
            Formada em Design Gráfico pela PUC-PR em 2012, trabalho na área de Front-End <strong>há mais de 15 anos</strong>.
          </p>
          <p>Atualmente, trabalho principalmente com WordPress, com foco no<strong> desenvolvimento, criação e organização de componentes reutilizáveis</strong>. Gosto de estruturar projetos de forma consistente, pensando em escalabilidade, manutenção e clareza de código.</p>
        </About>

         <Skills />
      </article>
    </>
  );
}

export default App;