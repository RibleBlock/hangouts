import { Element } from 'react-scroll';
import { Banner } from './Home.styles';

import logoBanner from '../../assets/images/logo.png';
import { TypeFoodButton } from '../../components';
import { ElementsNames, typeFoods } from '../../assets/Foods';
import { Footer, NavigationBar, Section } from '../../layouts';

export function Home() {
  return (
    <>
      <section>
        <Banner>
          <img src={logoBanner} alt="pizzaria" />
        </Banner>
      </section>
      <NavigationBar
        elements={ElementsNames}
      />

      <Element name={ElementsNames[0]}>
        <Section // 1
          title="Hangouts"
        >
          <p>
            Somos apaixonados por massas e nos dedicamos todos os
            dias a preparar um dos pratos mais populares do mundo.
            Nossa missão é levar qualidade e bons momentos para sua
            mesa, transformando o ato de comer pizza em uma experiência deliciosa.
          </p>
        </Section>
      </Element>

      <Element name={ElementsNames[1]}>
        <Section // 2
          background
          title="Valores"
        >
          <p>
            Acreditamos na qualidade dos nossos produtos e serviços,
            sempre para o melhor benefício dos nossos clientes.
            Ser honesto, transparente e ético com nossos fornecedores,
            parceiros, clientes e funcionários. Compramos diretamente
            do produtor, o que economiza ainda mais para nossos clientes.
            Estemos sempre preparados para os desafios que o ambiente
            externo e interno nos apresenta, acreditamos sempre na
            nossa capacidade de superação e no potencial dos nossos colaboradores.
          </p>
        </Section>
      </Element>

      <Element name={ElementsNames[2]}>
        <Section // 3
          subtitle="Nossas"
          title="Pizzas"
        >
          <div className="boxLinks">
            { Object.entries(typeFoods).map(([title, value]) => (
              <TypeFoodButton
                key={title}
                title={title}
                source={value.image.sourceAbs}
                alt={value.image.alt}
              />
            )) }
          </div>
        </Section>
      </Element>
      <Footer />
    </>
  );
}
