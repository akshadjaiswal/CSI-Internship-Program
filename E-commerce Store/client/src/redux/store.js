import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userSlice";
// Assuming initial state is exported from the respective files
import { initialState as cartInitialState } from "./cartRedux";
import { initialState as userInitialState } from "./userSlice";

// Now you can use cartInitialState and userInitialState in your code

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState: {
    // Initialize user and cart state with localStorage data
    user: { ...userInitialState, ...JSON.parse(localStorage.getItem('user')) },
    cart: { ...cartInitialState, ...JSON.parse(localStorage.getItem('cart')) },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
