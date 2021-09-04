const sumOfNumbersInString = require("./display-longest-name");

describe("", () => {
  test("", () => {
    expect(
      sumOfNumbersInString([
        "Geek",
        "Geeks",
        "Geeksfor",
        "GeeksforGeek",
        "GeeksforGeeks",
      ]),
    ).toBe("GeeksforGeeks");
  });
});
