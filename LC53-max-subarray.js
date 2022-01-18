// Leetcode 53. Maximum Subarray

// Given an integer array nums,
// find the contiguous subarray(containing at least one number)
// which has the largest sum and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// this one has weird naming convention. (contagious subarray?)
// Anywho, you will know what we are doing once you see the algorithm.
function maxSubArray(nums) {
  // first create max value which we will use when we start comparing
  bossMax = nums[0];
  // create simple loop that will start from 0 (remember we assigned 0 to "max" above)
  for (let i = 1; i < nums.length; i++) {
    // grab the current value
    const currentNum = nums[i];
    // compare the i (current num) with i + [i-1] (current num + previous num)
    // then put that to current index's place
    nums[i] = Math.max(currentNum, currentNum + nums[i - 1]);
    // next, check if nums[i] (or let's call it current max) is higher than "bossMax"
    // if so currentMax is the new bossMax
    bossMax = Math.max(bossMax, nums[i]);
  }
  // once loop is done, return the bossMax. Voila!
  return bossMax;
}
