const deleteAlternateChar = require("./delete-alternate-characters");

describe("", () => {
  test("", () => {
    expect(deleteAlternateChar("HimankBarve")).toBe("HmnBre");
    expect(deleteAlternateChar("HoneyBarve")).toBe("Hnyav");
  });
});
