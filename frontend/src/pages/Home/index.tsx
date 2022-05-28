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

export const bordas = {
  NENHUMA: {
    price: 0.00,
    nomes: ['Sem Borda'],
  },
  SALGADA: {
    price: 7.00,
    nomes: [
      'Cream cheddar',
      'Cream Cheese',
    ],
  },
  DOCE: {
    price: 9.00,
    nomes: [
      'Chocolate Preto',
      'Chocolate Branco',
    ],
  },

};
export type BordersType = keyof typeof bordas;

export const typeFoods = {
  PIZZA: {
    title: 'Pizzas Salgadas',
    flavor: {
      TRADICIONAIS: {
        price: 0.00,
        sabor: [
          {
            nome: 'Mozarela',
            descricao: 'Mozarela e molho especial de tomate.',
          },
          {
            nome: 'Lombinho',
            descricao: 'Mussarela, Lombo, Catupiry, cebola, Azeitonas',
          },
        ],
      },
      ESPECIAIS: {
        price: 5.00,
        sabor: [ // price: +5.00,
          {
            nome: 'Portuguesa',
            descricao: 'Mozarela e molho especial de tomate.',
          },
          {
            nome: 'Peperone',
            descricao: 'Peperone, Mussarela, Catupiry e Azeitonas.',
          },
        ],
      },
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
    flavor: {
      TRADICIONAIS: {
        price: 0.00,
        sabor: [
          {
            nome: 'Banana',
            descricao: 'Mozarela e molho especial de tomate.',
          },
          {
            nome: 'Dois amores',
            descricao: 'Mozarela e molho especial de tomate.',
          },
        ],
      },
      ESPECIAIS: {
        price: 5.00,
        sabor: [ // price: +5.00,
          {
            nome: 'Super Banana',
            descricao: 'Mozarela e molho especial de tomate.',
          },
          {
            nome: 'Quatro amores',
            descricao: 'Ovos, cebola, azeitona, ervilha, queijo e presunto.',
          },
        ],
      },
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
    },
    image: {
      source: doceSvg,
      sourceAbs: imagePizza,
      alt: 'Imagem de uma pizza doce',
    },
  },
  CALZONE: {
    title: 'Calzones',
    flavor: {
      TRADICIONAIS: {
        price: 5.00,
        sabor: [ // price: +5.00,
          {
            nome: 'Frango',
            descricao: '',
          },
          {
            nome: 'Frango com milho',
            descricao: '',
          },
          {
            nome: 'Frango com capupiry',
            descricao: '',
          },
          {
            nome: 'Presunto com capupiry',
            descricao: '',
          },
        ],
      },
    },
    sizes: {},
    image: {
      source: calzoneSvg,
      sourceAbs: imageCalzone,
      alt: 'Imagem de um Calzone',
    },
  },
  BEBIDA: {
    title: 'Bebidas',
    flavor: {
      LATINHA: {
        price: 0.00,
        sabor: [
          {
            nome: 'Fanta Uva',
            descricao: '',
          },
          {
            nome: 'Coca cola',
            descricao: '',
          },
        ],
      },
      '500 ML': {
        price: 5.00,
        sabor: [
          {
            nome: 'Água Mineral',
            descricao: '',
          },
          {
            nome: 'Guárana',
            descricao: '',
          },
        ],
      },
      '1 LITRO': {
        price: 5.00,
        sabor: [
          {
            nome: 'Fanta Laranja',
            descricao: '',
          },
          {
            nome: 'Guárana',
            descricao: '',
          },
        ],
      },
    },
    sizes: {},
    image: {
      source: bebidaSvg,
      sourceAbs: imageRefrigerante,
      alt: 'Imagem de uma Garrafa',
    },
  },
};
export type TypeFood = keyof typeof typeFoods;
export type SizeType = keyof typeof typeFoods.PIZZA.sizes;
export type FlavorType = keyof typeof typeFoods.PIZZA.flavor;
export type IngredientType = typeof typeFoods.PIZZA.flavor.TRADICIONAIS.sabor[0];

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
