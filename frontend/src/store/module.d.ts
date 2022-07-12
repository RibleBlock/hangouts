/* eslint-disable no-unused-vars */
import { Cart } from './Pedido/reducer';
import { Token } from './Auth/reducer';

declare interface State {
    reducer: {
      user: Token,
    }
}

declare interface Pedido {
  category: string | null,
  size: string | null,
  border: string,
  flavors: string[],
  comment?: string,
  value: number,
  idUser: number,
}

declare interface Flavor {
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
}
