import './Projetos.scss';

import projetos from './projetosData'; //chama os dados dos cards
import ProjetoCard from './ProjetoCard/ProjetoCard'; //chama a estrutura dos cards

function Projetos() { //cria a função das skills
  return (
    <section id="projects">
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

export default Projetos; //exporta a função das skills