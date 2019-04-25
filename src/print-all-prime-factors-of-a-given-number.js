function primeFactors(number: number): Array<number> {
  const factors = [];

  while (number % 2 === 0) {
    factors.push(2);
  }

  let n = number;

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      n /= i;
      factors.push(i);
    }
  }

  if (n > 2) {
    factors.push(n);
  }

  return factors;
}

export default primeFactors;
