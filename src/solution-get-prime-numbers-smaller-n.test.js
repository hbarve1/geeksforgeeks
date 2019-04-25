import primeNumber from "./solution-get-prime-numbers-smaller-n";

describe("sieve-of-eratosthenes", () => {
  test("Case 1", () => {
    const input = 10;
    const output = [2, 3, 5, 7];

    expect(primeNumber(input)).toEqual(output);
  });

  test("Case 2", () => {
    const input = 20;
    const output = [2, 3, 5, 7, 11, 13, 17, 19];

    expect(primeNumber(input)).toEqual(output);
  });
});
