// src/components/Hero/Hero.jsx
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Hero.scss';

// Registra os plugins necessários do GSAP
gsap.registerPlugin(ScrollTrigger, useGSAP);

function Hero({ description }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, // Usa a ref do elemento como gatilho do scroll
      }
    });

    tl.from('h1', {
      y: 10,
      opacity: 0,
      duration: 0.5
    })
    .to('h1 .h1a', {
      opacity: 0,
      duration: 0.5,
      delay: 1
    })
    .from('h1 .h1b', {
      x: 0,
      duration: 1
    }, "<")
    .from('p', {
      y: 10,
      opacity: 0,
      duration: 0.5
    }, "-=2");

  }, { scope: containerRef });

  return (
    <section id="intro" ref={containerRef}>
      <h1>Nat<span className="h1a">halie</span> <span className="h1b">Drabik</span></h1>
      <p>{description}</p>
    </section>
  );
}

export default Hero;
