import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pedido, State } from '../module';

const initialState = {
  category: null,
  size: null,
  border: '',
  flavors: [],
  comment: '',
  value: 0,
  idUser: null,
} as Pedido;

const { actions, reducer } = createSlice({
  name: 'PEDIDOS',
  initialState,
  reducers: {},
});

// export const getCart = (state: State) => state.cart.cart;
// export const getPedido = (state: State) => state.cart.pedido;
export default reducer;
