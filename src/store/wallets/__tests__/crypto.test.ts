import { encrypt, decrypt } from "../crypto";

describe("Crytpo Functions", () => {
  describe("encrypt", () => {
    it("should be able to encrypt to b64", () => {
      const expected = btoa("abcd-0x1234");
      expect(encrypt("0x1234", "abcd")).toBe(expected);
    });
  });

  describe("decrypt", () => {
    it("should be able to decrypt to b64", () => {
      const expected = "0x1234";
      expect(decrypt(btoa("abcd-0x1234"), "abcd")).toBe(expected);
    });

    it("should return null if password is incorrect", () => {
      expect(decrypt(btoa("abcd-0x1234"), "abcde")).toBeNull();
    });
  });
});
