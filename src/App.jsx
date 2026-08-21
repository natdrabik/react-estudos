import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Skills from "./components/Skills";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";
import './App.scss'

function App() {
  return (
    <>
      <article>
        <Header />
        <Hero />
        <Sobre />
        <Skills />
        <Projetos />
        <Footer />
      </article>
    </>
  );
}

export default App;