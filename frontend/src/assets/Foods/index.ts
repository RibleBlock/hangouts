import salgadaSvg from '../images/svgTypes/salgada.svg';
import doceSvg from '../images/svgTypes/doce.svg';
import calzoneSvg from '../images/svgTypes/calzone.svg';
import bebidaSvg from '../images/svgTypes/bebida.svg';

import imagePizza from '../images/imagePizza.svg';
import imageCalzone from '../images/imageCalzone.svg';
import imageRefrigerante from '../images/imageRefrigerante.svg';

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
        price: 3.70,
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
        price: 6.50,
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
