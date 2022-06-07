import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { State } from './module';

import pedidoState from './Pedido/reducer';

const reducer = combineReducers<State>({
  cart: pedidoState,
});

const store = configureStore({ reducer });

export default store;
