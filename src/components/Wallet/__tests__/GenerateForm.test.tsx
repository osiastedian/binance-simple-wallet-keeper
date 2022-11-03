import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '../../../utils/test-utils'
import WalletGenerateForm from '../GenerateForm'

describe('<WalletGenerateForm>', () => {
  it('should render password and generate button', () => {
    renderWithProviders(<WalletGenerateForm />)
    const generateButton = screen.queryByText('Generate')
    const passwordTextBox = screen.queryByLabelText('Password:')
    expect(generateButton).toBeInTheDocument()
    expect(passwordTextBox).toBeInTheDocument()
  })

  it('should register new wallet after clicking generate', () => {
    const { store } = renderWithProviders(<WalletGenerateForm />)
    const generateButton = screen.getByText('Generate')
    const passwordTextBox = screen.getByLabelText('Password:')

    userEvent.type(passwordTextBox, 'abcd')
    userEvent.click(generateButton)

    const walletState = store.getState().wallet

    expect(Object.keys(walletState.wallets).length).toBeGreaterThan(0)
  })
})
