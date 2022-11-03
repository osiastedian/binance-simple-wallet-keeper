import "./App.css";
import WalletGenerateForm from "./components/WalletGenerateForm";
import StoreProvider from "./store/Provider";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <WalletGenerateForm />
      </div>
    </StoreProvider>
  );
}

export default App;
