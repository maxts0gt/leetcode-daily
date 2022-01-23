// Leetcode 198. House Robber

// You are a professional robber planning to rob houses along a street
// But you can't rob adjacent two houses in a row.
// So, return maximum amount you can rob tonight!
// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Time -> O(n)
// Space -> O(n)
function rob(nums) {
  // if there is no house, then no robbery
  if (nums.length === 0) return 0;
  // if there is one house, then rob that house
  if (nums.length === 1) return nums[0];
  //   if there are two houses, then rob the richer one
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  //   and now it gets complex.
  //   if we have three or more, create a robbery array for storing
  let maxRobbery = [nums[0], Math.max(nums[0], nums[1])];
  //   then create loop starting from 3rd index
  for (let i = 2; i < nums.length; i++) {
    // now, either choose the current + (i-2) which is two previous or i-1 which is just previous
    // basically what's happening is, you are adding i and i-2 and comparing that with i-1
    // in other words, [3, 8, 4] -> choose between 3+4 or 8
    // then put that into maxRobbery array, which will be the last one
    maxRobbery.push(Math.max(nums[i] + maxRobbery[i - 2], maxRobbery[i - 1]));
  }
  // Voila, return the popped number
  return maxRobbery.pop();
}
