//return sum of all prime numbers less than or equal to num
function sumPrimes(num) {
    let primes=[];
    for (let i=2;i<=num;i++) {
      if (primes.every((prime) => i % prime !== 0)) {
        primes.push(i);
  
  
      }
  
    }
    return primes.reduce((a,b)=>a+b);
  }
  
  sumPrimes(10);

//more efficient solution
function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
