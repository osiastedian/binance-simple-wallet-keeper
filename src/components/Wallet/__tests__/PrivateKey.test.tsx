import { renderWithProviders } from '../../../utils/test-utils'
import PrivateKey from '../PrivateKey'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { encrypt } from '../../../store/wallets/crypto'

describe('<WalletPrivateKey>', () => {
  const wallet = {
    address: '0xdE7C4947E6C2fBb6A7724d999dc8d92Ce05D184B',
    privateKey:
      '0xf09e9ff8051f0261c84e0e0237ba50cdd2fd922326d0038d5e86042374d381bf',
  }

  it('should initially show View', () => {
    renderWithProviders(<PrivateKey address={wallet.address} />)
    const viewButton = screen.queryByText('View')

    expect(viewButton).toBeInTheDocument()
  })

  it('should be able to view privateKey', () => {
    renderWithProviders(<PrivateKey address={wallet.address} />, {
      preloadedState: {
        wallet: {
          wallets: {
            [wallet.address]: encrypt(wallet.privateKey, 'abcd'),
          },
        },
      },
    })

    const viewButton = screen.getByText('View')
    userEvent.click(viewButton)

    const textBox = screen.getByPlaceholderText('Password')
    userEvent.type(textBox, 'abcd')

    const enterButton = screen.getByText('Enter')
    userEvent.click(enterButton)

    const privateKey = screen.queryByText(wallet.privateKey)
    expect(privateKey).toBeInTheDocument()
  })
})
