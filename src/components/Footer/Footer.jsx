import './Footer.scss';

import footer from './footerData'; //chama os dados dos cards
import FooterItem from './FooterItem/FooterItem'; //chama a estrutura dos cards

function Footer() { //cria a função do footer
  return (
    <section id="links">
    <ul>
      {footer.map((item, index) => (
        <FooterItem key={index} {...item} />
      ))}
    </ul>
  </section>
  );
}

export default Footer; //exporta a função do footer