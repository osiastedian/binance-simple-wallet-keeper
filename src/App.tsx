import WalletList from './components/Wallet/List'
import WalletGenerateForm from './components/Wallet/GenerateForm'
import StoreProvider from './store/Provider'

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <WalletGenerateForm />
        <WalletList />
      </div>
    </StoreProvider>
  )
}

export default App
