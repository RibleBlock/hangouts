/* eslint-disable no-unused-vars */
import { Cart } from './Pedido/reducer';
import { Token } from './Auth/reducer';

declare interface State {
  reducer: {
    user: Token;
  };
}

declare interface Pedido {
  category: string | null;
  size: string | null;
  border: string;
  flavors: string[];
  comment?: string;
  value: number;
  idUser: number;
}

declare interface FlavorDB {
  name: string;
  created_at: string;
  flavor_category: {
    name: string;
    price: number;
  };
  flavor_type: {
    name: string;
    create_at: string;
  };
  flavor_ingredient: [
    {
      ingredient: {
        name: string;
        created_at: string;
      };
    }
  ];
}

declare interface flavorTypePizzaSize {
  pizza_size: {
    idPizzaSize: number,
    createdAt: string,
    name: string,
    price: number,
    quantidade_flavors: number,
  },
}
