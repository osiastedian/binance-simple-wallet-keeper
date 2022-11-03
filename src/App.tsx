import "./App.css";
import WalletList from "./components/Wallet/List";
import WalletGenerateForm from "./components/WalletGenerateForm";
import StoreProvider from "./store/Provider";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <WalletGenerateForm />
        <WalletList />
      </div>
    </StoreProvider>
  );
}

export default App;
