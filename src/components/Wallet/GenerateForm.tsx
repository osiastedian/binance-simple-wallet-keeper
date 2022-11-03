import { useState } from "react";
import { useDispatch } from "react-redux";
import { actions as WalletActions } from "../../store/wallets";

const WalletGenerateForm: React.FC = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const handleOnSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    dispatch(WalletActions.generateWallet({ password }));
    setPassword("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="walletPassword">Password:</label>
        <input
          type="password"
          name="walletPassword"
          id="walletPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Generate</button>
    </form>
  );
};

export default WalletGenerateForm;
