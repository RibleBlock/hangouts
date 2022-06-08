import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { State } from './module';

import pedidoState from './Pedido/reducer';
import userState from './User/reducer';

const reducer = combineReducers<State>({
  cart: pedidoState,
  user: userState,
});

const store = configureStore({ reducer });

export default store;
