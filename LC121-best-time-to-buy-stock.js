// Leetcode 121. Best Time to Buy and Sell Stock

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Time -> O(n)
// Space -> O(1)

var maxProfit = function (prices) {
  // We will store max profit in here later on
  let maxProfit = 0;
  // cheapest price will start from index 0
  // this logically makes sense, think about it
  let cheapestPrice = prices[0];
  // create a simple loop, after all we need to loop, right?
  for (let i = 0; i < prices.length; i++) {
    //   grab the current prices, so we could do stuff with them
    let currentPrice = prices[i];
    // doing stuff with them
    // if current price is cheaper than cheapest, then it is cheapest
    // it is like if you beat the prison boss, u the prison boss
    if (currentPrice < cheapestPrice) cheapestPrice = currentPrice;
    // grab the current profit
    let currentProfit = currentPrice - cheapestPrice;
    // and we will update max profit each iteration
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  // after loop finishes we return the maxProfit
  // which is our maxProfit! Voila!
  return maxProfit;
};