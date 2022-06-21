import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import pedidoState from './Pedido/reducer';
import tokenState from './Auth/reducer';

import { authApi } from '../services/api/Auth';

// aqui vai os reducers/estados que vao percistir //
const reducersToPersist = combineReducers({
  user: tokenState,
});
// //

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducersToPersist);

// aqui vai os reducers/estados que nao vao percistir //
const reducer = {
  reducer: persistedReducer,
  cart: pedidoState,
  [authApi.reducerPath]: authApi.reducer,
};
// //

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
