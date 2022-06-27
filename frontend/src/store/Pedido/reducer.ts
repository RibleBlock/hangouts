import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../module';

const initialState = {
  category: null,
  size: null,
  border: null,
  flavors: [],
  comment: '',
  id_user: null,
} as Pedido;

const { actions, reducer } = createSlice({
  name: 'PEDIDOS',
  initialState,
  reducers: {},
});

// export const getCart = (state: State) => state.cart.cart;
// export const getPedido = (state: State) => state.cart.pedido;
export default reducer;
