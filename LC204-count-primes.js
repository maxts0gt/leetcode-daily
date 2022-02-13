// LeetCode No.204: Count Primes

// Given an integer n, return the number of prime numbers
// that are strictly less than n.

// Example 1:
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

function countPrimes(n) {
  // create array with length of n and set it all to true
  let primes = new Array(n).fill(true);
  // create value for count number of trues inside the primes later on
  let countingPrimes = 0;
  //   then we start looping
  // pay attention, we start at 2 and finish before end of primes
  // that's because primes are divided 1 and itself and we are excluding them
  for (let i = 2; i < primes.length; i++) {
    // our logic is that if we have true in our primes
    if (primes[i]) {
      // then we create loop inside the loop
      // we are going eliminate non-primes here
      // by setting them false inside the primes array
      // basic logic is as long as i * i < n then loop (2 * 2 < 10)
      for (let j = i; j * i < primes.length; j++) {
        // exclude results came from i * j inside loop of i * i
        primes[i * j] = false;
      }
    }
  }
  // now since we updated values, we just need to count how many trues we have
  for (let i = 2; i < primes.length; i++) {
    //   if it is true, the increase the values
    if (primes[i]) {
      countingPrimes++;
    }
  }
  //   Voila! FYI, this method is known as Sieve of Eratosthenes!
  return countingPrimes;
}
