import { useSelector } from "react-redux";
import { walletAddress } from "../../store/wallets/selectors";
import WalletPrivateKey from "./PrivateKey";

const WalletList = () => {
  const walletAddresses = useSelector(walletAddress);
  return (
    <table>
      <thead>
        <tr>
          <td>Address</td>
          <td>Private Key</td>
        </tr>
      </thead>
      <tbody>
        {walletAddresses.length > 0 ? (
          walletAddresses.map((address) => (
            <tr key={address}>
              <td>{address}</td>
              <td>
                <WalletPrivateKey address={address} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>EMPTY</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default WalletList;
