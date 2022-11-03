import WalletList from "../List";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test-utils";
describe("<WalletList/>", () => {
  it("should show empty if no wallets are available", () => {
    renderWithProviders(<WalletList />);
    expect(screen.getByText("EMPTY")).toBeInTheDocument();
  });

  it("should show addresses if wallets are available", () => {
    renderWithProviders(<WalletList />, {
      preloadedState: {
        wallet: {
          wallets: {
            "0x1234": "abcd",
          },
        },
      },
    });
    expect(screen.getByText("0x1234")).toBeInTheDocument();
    expect(screen.getByText("View")).toBeInTheDocument();
  });
});
