import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.scss';

// Registra os plugins necessários do GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

function About({ children }) {
  const containerRef = useRef(null);

  useGSAP(() => {

    const tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: containerRef.current, // Usa a ref do elemento como gatilho do scroll
    }
    })
    tlAbout.from('#about h2', {
        y: 10,
      opacity:0,
      duration: .5,
      delay:.5
    })
    tlAbout.from('#about img', {
        y: 10,
      opacity:0,
      duration: .5,
    })
    .from('#about p', {
      y: 10,
      opacity:0,
      duration: .5,
      stagger: 0.2
    })

  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef}>
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