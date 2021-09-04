const removeSpaces = require("./remove-spaces");

describe("", () => {
  test("", () => {
    expect(removeSpaces("geeks  for geeks")).toBe("geeksforgeeks");
    expect(removeSpaces("    g f g")).toBe("gfg");
  });
});
