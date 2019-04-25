const { method1, method2 } = require("./array-rotation");

describe("Array Rotation", () => {
  describe("Method 1", () => {
    test("Case 1", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const distance = 2;

      const output = [3, 4, 5, 6, 7, 1, 2];

      expect(method1(array, distance)).toEqual(output);
    });
  });

  describe("Method 2", () => {
    test("Case 1", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const distance = 2;

      const output = [3, 4, 5, 6, 7, 1, 2];

      expect(method2(array, distance)).toEqual(output);
    });
  });

  describe("Method 3", () => {
    test("Case 1", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];
      const distance = 2;

      const output = [3, 4, 5, 6, 7, 1, 2];

      expect(method1(array, distance)).toEqual(output);
    });
  });
});
