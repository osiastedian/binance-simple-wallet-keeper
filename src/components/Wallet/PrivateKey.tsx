import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/Provider'

import { getWalletPrivateKey } from '../../store/wallets/selectors'

type WalletPrivateKeyProps = {
  address: string
}

const WalletPrivateKey: React.FC<WalletPrivateKeyProps> = ({ address }) => {
  const [password, setPassword] = useState('')
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const privateKey = useSelector((state: RootState) =>
    getWalletPrivateKey(state, address, password)
  )

  const submitPassword: React.FormEventHandler = (e) => {
    e.preventDefault()
    setShowPasswordForm(false)
    setShowPrivateKey(true)
  }

  useEffect(() => {
    if (privateKey === null && showPrivateKey) {
      setShowPrivateKey(false)
    }
  }, [privateKey, showPrivateKey])

  if (showPasswordForm) {
    return (
      <form onSubmit={submitPassword}>
        <input
          type="password"
          name={`${address} password`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        ></input>
        <button type="submit">Enter</button>
      </form>
    )
  }

  if (!showPrivateKey) {
    return <button onClick={() => setShowPasswordForm(true)}>View</button>
  }

  return <span>{privateKey}</span>
}

export default WalletPrivateKey
