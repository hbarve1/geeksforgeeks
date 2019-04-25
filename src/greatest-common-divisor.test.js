const { method1, method2 } = require("./greatest-common-divisor");

describe("Greatest Common Divisor", () => {
  describe("Method 1", () => {
    test("Case 1", () => {
      const inputs = [36, 60];

      expect(method1(...inputs)).toBe(12);
    });

    test("Case 2", () => {
      const inputs = [98, 56];

      expect(method1(...inputs)).toBe(14);
    });
  });

  describe("Method 2", () => {
    test("Case 1", () => {
      const inputs = [36, 60];

      expect(method2(...inputs)).toBe(12);
    });

    test("Case 2", () => {
      const inputs = [98, 56];

      expect(method2(...inputs)).toBe(14);
    });
  });
});
