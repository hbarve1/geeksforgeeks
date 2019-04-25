import primeFactors from "./print-all-prime-factors-of-a-given-number";

describe("sieve-of-eratosthenes", () => {
  test("Case 1", () => {
    const input = 315;
    const output = [3, 3, 5, 7];

    expect(primeFactors(input)).toEqual(output);
  });

  // test("Case 2", () => {
  //   const input = 20;
  //   const output = [2, 3, 5, 7, 11, 13, 17, 19];

  //   expect(primeFactors(input)).toEqual(output);
  // });
});
