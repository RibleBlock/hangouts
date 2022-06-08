/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../module';

export interface User {
  name: string;
  email: string;
  senha: string;
  address: string;
}

const initialState = {
  name: '',
  email: '',
  senha: '',
  address: '',
} as User;

const { actions, reducer } = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    addAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
  },
});

export const getUser = (state: State) => state.user;
export const { addAddress } = actions;
export default reducer;
