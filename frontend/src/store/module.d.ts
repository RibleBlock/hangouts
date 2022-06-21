/* eslint-disable no-unused-vars */
import { Cart } from './Pedido/reducer';
import { User } from './Auth/reducer';

interface State {
  cart?: Cart;
  token: User;
}
