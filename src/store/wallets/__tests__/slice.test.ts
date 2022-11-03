import slice from '../index'
import { WalletState } from '../types'

describe('Wallet Reducers', () => {
  describe('Generate Wallet', () => {
    it('should be able to generate new Wallet to the state', () => {
      const state: WalletState = {
        wallets: {},
      }
      slice.caseReducers.generateWallet(
        state,
        slice.actions.generateWallet({ password: 'abcd' })
      )
      expect(Object.keys(state.wallets).length).toBeGreaterThan(0)
    })
  })
})
