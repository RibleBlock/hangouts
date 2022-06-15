import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { State } from './module';

import pedidoState from './Pedido/reducer';
import userState from './User/reducer';

import { authApi } from '../services/api/Auth';

const reducersToPersist = combineReducers<State>({
  user: userState,
  cart: pedidoState,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducersToPersist);

const reducer = {
  reducer: persistedReducer,
  [authApi.reducerPath]: authApi.reducer,
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

const persistor = persistStore(store);

export { store, persistor };
