import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Projetos.scss';

import projetos from './projetosData'; //chama os dados dos cards
import ProjetoCard from './ProjetoCard/ProjetoCard'; //chama a estrutura dos cards

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Projetos() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tlProjetos = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Inicia a animação quando o topo da seção chega a 80% da tela
      }
    });

    tlProjetos.from('h2', {
      y: 10,
      opacity:0,
      duration: .5,
      delay:.5
    })
    .from('article', {
      y: 10,
      opacity:0,
      duration: .5,
      stagger: 0.2
    })

  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef}>
      <h2>Projetos</h2>
      <div className="grid">
        {projetos.map((projeto) => (
          <ProjetoCard
            key={projeto.title} //serve para o react identificar o elemento, deve ser único para cada item
            title={projeto.title}
            image={projeto.image}
            year={projeto.year}
            url={projeto.url}
            description={projeto.description}
          />
        ))}
      
      </div>
    </section>
  );
}