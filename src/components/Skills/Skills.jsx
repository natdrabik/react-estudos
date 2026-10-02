import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Skills.scss';

import skills from './skillsData'; //chama os dados dos cards
import SkillCard from './SkillCard/SkillCard'; //chama a estrutura dos cards

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tlSkills = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', // Inicia a animação quando o topo da seção chega a 80% da tela
      }
    });

    tlSkills.from('h2', {
      y: 10,
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    })

    .from('li', {
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2
    });

  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef}>
      <h2>Habilidades</h2>
      <ul>
        {skills.map((skill) => (
          <SkillCard
            key={skill.name} //serve para o react identificar o elemento, deve ser único para cada item
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      
      </ul>
    </section>
  );
}