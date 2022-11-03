import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../Provider";
import { decrypt } from "./crypto";

const baseState = (state: RootState) => state.wallet;

const getWallets = createSelector([baseState], (state) => state.wallets);

export const getWalletAddresses = createSelector([getWallets], (wallets) => {
  return Object.keys(wallets);
});

export const getWalletPrivateKey = createSelector(
  [
    getWallets,
    (state: RootState, address: string, password: string) => {
      return {
        address,
        password,
      };
    },
  ],
  (wallets, payload) => {
    if (!wallets[payload.address]) {
      return null;
    }
    return decrypt(wallets[payload.address], payload.password);
  }
);
