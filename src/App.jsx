import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <main>
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;