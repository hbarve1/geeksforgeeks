function primeNumber(number: number): Array<number> {
  const primeNumbers: Array<number> = [];

  let factor = 1;
  for (let k = 2; k < number; k += 1) {
    factor *= k - 1;

    if ((factor + 1) % k === 0) {
      // console.log({ k, factor });

      primeNumbers.push(k);
    }
  }

  return primeNumbers;
}

export default primeNumber;
