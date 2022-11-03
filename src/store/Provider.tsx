import { configureStore } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import WalletSlice from "./wallets";

const store = configureStore({
  reducer: {
    wallet: WalletSlice.reducer,
  },
});

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default StoreProvider;
