/* eslint-disable no-unused-vars */
import { Cart } from '../../store/Pedido/reducer';
import { Token } from '../../store/Auth/reducer';

declare interface State {
  reducer: {
    user: Token,
  },
}

declare interface Pedido {
  category: string | null,
  size: number | null,
  border: number,
  flavors: number[],
  comment?: string,
  value: number,
  idUser: number,
}

declare interface FlavorDB {
  id_flavor: number,
  name: string,
  created_at: string,
  flavor_category: {
    name: string,
    price: number,
  },
  flavor_type: {
    name: string,
    create_at: string,
  },
  flavor_ingredient: [
    {
      ingredient: {
        id_ingredient: number,
        name: string,
        created_at: string,
      },
    }
  ],
}

declare interface CalzoneDB {
  id_calzone: number,
  created_at: string,
  name: string,
  id_comment: string | null,
  price: number,
}

declare interface DrinkDB {
  id_drink_size: number,
  created_at: string,
  name_drink_size: string,
  price: number,
  drink_size_drink: [
    {
      drink: {
        id_drink: number,
        created_at: string,
        name_drink: string,
      }
    }
  ]
}

declare interface FlavorTypePizzaSize {
  pizza_size: {
    id_pizza_size: number,
    createdAt: string,
    name: string,
    price: number,
    quantidade_flavors: number,
  },
}

declare interface BorderDB {
  id_pizza_border: number,
  created_at: string,
  name: string,
  price: number,
}
