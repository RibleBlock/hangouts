/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from '../module';

export interface Token {
  token: string;
}

const initialState = {
  token: 'empty',
} as Token;

const { actions, reducer } = createSlice({
  name: 'USERTOKEN',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    removeToken(state) {
      state.token = 'empty';
    },
  },
});

export const getToken = (state: State) => state.reducer.user.token;
export const { addToken, removeToken } = actions;
export default reducer;
