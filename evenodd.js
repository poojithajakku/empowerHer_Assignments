// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to check if a number is even
function evenOdd(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
