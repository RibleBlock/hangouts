import { useState } from 'react';
import { Banner } from './Home.styles';

import logoBanner from '../../assets/images/logo.png';
import { Footer, NavigationBar } from '../../components';
import { Section } from '../../components/Section';

import imagePizza from '../../assets/images/imagePizza.svg';
import imageCalzone from '../../assets/images/imageCalzone.svg';
import imageRefrigerante from '../../assets/images/imageRefrigerante.svg';
import { TypeFoodButton } from '../../components/TypeFoodButton';

const typeFoods = {
  PIZZA: {
    title: 'Pizzas',
    image: {
      source: imagePizza,
      alt: 'Imagem de uma pizza',
    },
  },
  CALZONE: {
    title: 'Calzones',
    image: {
      source: imageCalzone,
      alt: 'Imagem de uma Calzones',
    },
  },
  BEBIDA: {
    title: 'Bebidas',
    image: {
      source: imageRefrigerante,
      alt: 'Imagem de uma Garrafa',
    },
  },
};
export type TypeFood = keyof typeof typeFoods;

export function Home() {
  const [typeFood, setTypeFood] = useState<TypeFood | null>(null);

  return (
    <>
      <section>
        <Banner>
          <img src={logoBanner} alt="pizzaria" />
        </Banner>
        <NavigationBar />
      </section>
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
      <Section // 3
        subtitle="Nossas"
        title="Pizzas"
      >
        <div className="boxLinks">
          { Object.entries(typeFoods).map(([title, value]) => (
            <TypeFoodButton
              key={title}
              onSelectTypeFood={setTypeFood}
              title={title}
              source={value.image.source}
              alt={value.image.alt}
            />
          )) }
        </div>
      </Section>
      <Footer />
    </>
  );
}
