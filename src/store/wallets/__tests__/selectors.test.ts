import { getWalletPrivateKey, getWalletAddresses } from "../selectors";

describe("Wallet Selectors", () => {
  describe("getWalletAddresses", () => {
    it("should return empty if no addresses are available", () => {
      const addresses = getWalletAddresses({
        wallet: {
          wallets: {},
        },
      });
      expect(addresses.length).toBe(0);
    });

    it("should return addresses available", () => {
      const addresses = getWalletAddresses({
        wallet: {
          wallets: {
            "0x1234": "abcd",
          },
        },
      });
      expect(addresses.length).toBe(1);
      expect(addresses[0]).toBe("0x1234");
    });
  });

  describe("getWalletPrivateKey", () => {
    it("should return null if not registered", () => {
      const privateKey = getWalletPrivateKey(
        {
          wallet: {
            wallets: {
              "0x1234": "abcd",
            },
          },
        },
        "0x12341",
        "abcd"
      );

      expect(privateKey).toBeNull();
    });

    it("should return null if password is incorrect", () => {
      const privateKey = getWalletPrivateKey(
        {
          wallet: {
            wallets: {
              "0x1234": btoa("abcd-0xqwerty"),
            },
          },
        },
        "0x1234",
        "abcde"
      );

      expect(privateKey).toBeNull();
    });

    it("should return private key if params are correct", () => {
      const privateKey = getWalletPrivateKey(
        {
          wallet: {
            wallets: {
              "0x1234": btoa("abcd-0xqwerty"),
            },
          },
        },
        "0x1234",
        "abcd"
      );

      expect(privateKey).toBe("0xqwerty");
    });
  });
});
