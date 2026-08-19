import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import About from "./components/Skills";
import Projetos from "./components/Projetos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <article>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projetos />
        <Footer />
      </article>
    </>
  );
}

export default App;