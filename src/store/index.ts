import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import tokenState from './Auth/reducer';

import { authApi } from '../services/api/Auth';
import { wishApi } from '../services/api/wish';

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
  [authApi.reducerPath]: authApi.reducer,
  [wishApi.reducerPath]: wishApi.reducer,
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
