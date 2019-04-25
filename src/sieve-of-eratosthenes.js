function SieveOfEratosthenes(input: number): Array<number> {
  const prime: Array<boolean> = new Array(input + 1).fill(true);

  for (let i = 2; i * i <= input; i += 1) {
    if (prime[i] === true) {
      for (let j = i * i; j <= input; j += i) {
        // console.log({ i, j });
        prime[j] = false;
      }
    }
  }

  const output = [];

  for (let i = 2; i < input; i += 1) {
    if (prime[i]) {
      output.push(i);
    }
  }

  return output;
}

export default SieveOfEratosthenes;
