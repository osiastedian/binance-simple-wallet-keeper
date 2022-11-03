export const encrypt = (privateKey: string, password: string) => {
  return btoa(`${password}-${privateKey}`)
}

export const decrypt = (encryptedKey: string, password: string) => {
  const decrypted = atob(encryptedKey)
  const tokens = decrypted.split('-')
  if (tokens.length !== 2 || tokens[0] !== password) {
    return null
  }
  return tokens[1]
}
