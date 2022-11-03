import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Wallet } from "ethers";

type EncryptedPrivateKey = string;

interface WalletStore {
  wallets: Record<string, EncryptedPrivateKey>;
}
const initialState: WalletStore = {
  wallets: {},
};

const slice = createSlice({
  name: "Wallets",
  initialState,
  reducers: {
    generateWallet: (state, action: PayloadAction<{ password: string }>) => {
      const wallet = Wallet.createRandom();
      state.wallets[wallet.address] = wallet.privateKey;
    },
  },
});

export const actions = slice.actions;

export default slice;
