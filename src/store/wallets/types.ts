export type EncryptedPrivateKey = string

export interface WalletState {
  wallets: Record<string, EncryptedPrivateKey>
}
