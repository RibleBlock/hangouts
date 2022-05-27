import { Element } from 'react-scroll';
import { Banner } from './Home.styles';

import logoBanner from '../../assets/images/logo.png';
import {
  Footer, NavigationBar, Section, TypeFoodButton,
} from '../../components';

import salgadaSvg from '../../assets/images/svgTypes/salgada.svg';
import doceSvg from '../../assets/images/svgTypes/doce.svg';
import calzoneSvg from '../../assets/images/svgTypes/calzone.svg';
import bebidaSvg from '../../assets/images/svgTypes/bebida.svg';

import imagePizza from '../../assets/images/imagePizza.svg';
import imageCalzone from '../../assets/images/imageCalzone.svg';
import imageRefrigerante from '../../assets/images/imageRefrigerante.svg';

// export const typeSabores = {};

export const typeFoods = {
  PIZZA: {
    title: 'Pizzas Salgadas',
    flavor: {
      TRADICIONAL: {
        price: 40.00,
        sabor: [
          {
            nome: 'Mozarela',
            Ingredients: 'Mozarela e molho especial de tomate.',
          },
          {
            nome: 'Mozarela',
            Ingredients: 'Mozarela e molho especial de tomate.',
          },
        ],
      },
      ESPECIAL: [ // price: +5.00,
        {
          nome: 'Portuguesa',
          Ingredients: 'Mozarela e molho especial de tomate.',
        },
        {
          nome: 'Portuguesa',
          Ingredients: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.',
        },
      ],
    },
    sizes: {
      BROTO: {
        size: 'Broto',
        quantity: 1,
        price: 26.00,
      },
      MEDIA: {
        size: 'Média',
        quantity: 2,
        price: 35.00,
      },
      GRANDE: {
        size: 'Grande',
        quantity: 3,
        price: 48.00,
      },
      GIGA: {
        size: 'Giga',
        quantity: 4,
        price: 62.00,
      },
    },
    image: {
      source: salgadaSvg,
      sourceAbs: imagePizza,
      alt: 'Imagem de uma pizza salgada',
    },
  },
  DOCE: {
    title: 'Pizzas Doces',
    sizes: {
      BROTO: {
        size: 'Broto',
        quantity: 1,
        price: 26.00,
      },
      MEDIA: {
        size: 'Média',
        quantity: 2,
        price: 35.00,
      },
    },
    image: {
      source: doceSvg,
      sourceAbs: imagePizza,
      alt: 'Imagem de uma pizza doce',
    },
  },
  CALZONE: {
    title: 'Calzones',
    sizes: {},
    image: {
      source: calzoneSvg,
      sourceAbs: imageCalzone,
      alt: 'Imagem de um Calzone',
    },
  },
  BEBIDA: {
    title: 'Bebidas',
    sizes: {
      LATA: {
        size: 'lata',
        price: 4.00,
      },
      MEDIA: {
        size: 'Garafa - 500mls',
        price: 5.50,
      },
    },
    image: {
      source: bebidaSvg,
      sourceAbs: imageRefrigerante,
      alt: 'Imagem de uma Garrafa',
    },
  },
};
export type TypeFood = keyof typeof typeFoods;
export type SizeTypes = keyof typeof typeFoods.PIZZA.sizes;

export const ElementsNames = [
  'Hangouts', 'Valores', 'Pedir',
];

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
