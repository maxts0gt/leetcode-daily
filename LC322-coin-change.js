// Leetcode No. 322: Coin Change

// You are given an integer array coins representing coins of different denominations
// and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Example 1:
// Input: coins = [1,2,5], amount = 11  -> remember that we have infinite number of 1, 2, 5
// Output: 3
// Explanation: 11 = 5 + 5 + 1

function coinChange(coins, amount) {
  // first we create array of equal length of coins
  minCoins = new Array(amount + 1).fill(Infinity);
  //   then set first array to 0
  minCoins[0] = 0;
  // create simple loop
  for (let i = 1; i < minCoins.length; i++) {
    // create inner loop to go through every coin
    for (let j = 0; j < coins.length; j++) {
      //   grab the current coin value
      const coinValue = coins[j];
      // if coin value is lower
      if (coinValue <= i) {
        //   Choose between currentValue - coinValue and previousValue
        //   Basically if current value is less than previous we update it
        minCoins[i] = Math.min(minCoins[i - coinValue] + 1, minCoins[i]);
      }
    }
  }
  // we grab the last value of the minCoins array
  const answer = minCoins[minCoins.length - 1];
  // then if it is equal to infinity (remember we set up everything infinity) return -1
  // else return the answer. Voila!
  return answer === Infinity ? -1 : answer;
}
