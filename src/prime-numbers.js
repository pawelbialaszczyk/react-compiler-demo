const isPrimeNumber = (number) => {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

function* getAllPrimeNumbers(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrimeNumber(i)) yield i;
  }
}

export const getPrimeNumbers = (limit) => {
  const primeNumberGenerator = getAllPrimeNumbers(limit);

  const primeNumbers = [];

  for (let primeNumber of primeNumberGenerator) {
    primeNumbers.push(primeNumber);
  }

  return primeNumbers;
};
