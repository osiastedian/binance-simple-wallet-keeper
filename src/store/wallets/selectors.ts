import { createSelector } from "@reduxjs/toolkit";
import { StoreState } from "../type";
import { decrypt } from "./crypto";
import { WalletState } from "./types";

const baseState = (state: StoreState) => {
  return state.wallet as WalletState;
};

const getWallets = createSelector([baseState], (state) => state.wallets);

export const walletAddress = createSelector([getWallets], (wallets) => {
  return Object.keys(wallets);
});

export const getWalletPrivateKey = createSelector(
  [
    getWallets,
    (state: StoreState, address: string, password: string) => ({
      address,
      password,
    }),
  ],
  (wallets, payload) => {
    return decrypt(wallets[payload.address], payload.password);
  }
);
