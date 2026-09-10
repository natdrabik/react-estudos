import './Skills.scss';

import skills from './skillsData'; //chama os dados dos cards
import SkillCard from './SkillCard/SkillCard'; //chama a estrutura dos cards

function Skills() { //cria a função das skills
  return (
    <section id="skills">
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

export default Skills; //exporta a função das skills