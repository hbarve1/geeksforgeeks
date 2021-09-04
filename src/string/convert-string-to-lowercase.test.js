const toLowercase = require("./convert-string-to-lowercase");

describe("", () => {
  test("", () => {
    expect(toLowercase("ABCddE")).toBe("abcdde");
    expect(toLowercase("LMNOppQQ")).toBe("lmnoppqq");
  });
});
