import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Wallet } from 'ethers'
import { encrypt } from './crypto'
import { WalletState } from './types'

const initialState: WalletState = {
  wallets: {},
}

const slice = createSlice({
  name: 'Wallets',
  initialState,
  reducers: {
    generateWallet: (state, action: PayloadAction<{ password: string }>) => {
      const wallet = Wallet.createRandom()
      state.wallets[wallet.address] = encrypt(
        wallet.privateKey,
        action.payload.password
      )
    },
  },
})

export const actions = slice.actions

export default slice
