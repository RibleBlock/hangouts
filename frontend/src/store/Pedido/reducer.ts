import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../module';

export interface Pedido {
  category: string | null;
  type: string | null;
  size: string | null;
  borda: string | null;
  sabores: string[];
}
export interface Cart {
  pedido: Pedido;
  cart: Pedido[];
}

const initialState = {
  pedido: {
    category: null,
    type: null,
    size: null,
    borda: null,
    sabores: [],
  },
  cart: [],
} as Cart;

const { actions, reducer } = createSlice({
  name: 'PEDIDOS',
  initialState,
  reducers: {},
});

// export const getCart = (state: State) => state.cart.cart;
// export const getPedido = (state: State) => state.cart.pedido;
export default reducer;
