import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import WalletSlice from "./wallets";

const LOCALSTORAGE_KEY = "STORE_STATE";

const persistedStateSerialized = localStorage.getItem(LOCALSTORAGE_KEY);

let preloadedState = persistedStateSerialized
  ? JSON.parse(persistedStateSerialized)
  : undefined;

export const reducer = combineReducers({
  wallet: WalletSlice.reducer,
});

export const store = configureStore({
  reducer,
  preloadedState,
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

const saveStoreSate = () => {
  const serialized = JSON.stringify(store.getState());
  localStorage.setItem(LOCALSTORAGE_KEY, serialized);
};

store.subscribe(() => saveStoreSate());

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
