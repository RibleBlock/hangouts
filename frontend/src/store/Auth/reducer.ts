/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../module';

export interface Token {
  token: string;
}

const initialState = {
  token: '',
} as Token;

const { actions, reducer } = createSlice({
  name: 'USERTOKEN',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export const getToken = (state: State) => state.token;
export const { addToken } = actions;
export default reducer;
