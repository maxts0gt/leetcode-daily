// Leetcode 300: Longest Increasing Subsequence
// it has a long description. so, if u want to read desc, feel free to visit Leetcode No: 300.

// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

// Time -> O(n^2)
// Space -> O(n)
function lengthOfLIS(nums) {
  // this is a simple problem. understand the problem first, then the code
  //  if there is no value, then 0 (should always check the easy out)
  if (nums.length === 0) return 0;
  // first we create equal number of array of nums, all starting at 1 for counting
  // and then we will update them based on whether next number is high or low
  let count = new Array(nums.length).fill(1); //[2, 6, 4, 7] -> [1, 1, 1, 1]
  //   then create value for counting longest sequence
  let longestSequence = 1;
  //   we are gonna create loop inside loop for comparing each value with others
  //   there is a front value, which starts at front
  for (let frontValue = 1; frontValue < nums.length; frontValue++) {
    // and behind value which starts behind the front value
    for (let behindValue = 0; behindValue < frontValue; behindValue++) {
      // now here is our actual logic comes
      // we check if the frontValue > behindValue,
      if (nums[frontValue] > nums[behindValue]) {
        // if so we will increase corresponding number inside the count array
        // for example, [2, 6, 4, 7] -> [1, 2, 1, 1]. And then -> [1, 2, 1, 3] etc
        // this is something like: Math.max(1 + 1, 1) which is bigger etc.
        count[frontValue] = Math.max(count[behindValue] + 1, count[frontValue]);
      }
    }
    // remember that we updated numbers inside the count by adding "1"
    // now the number is something like [1, 2, 2, 3]
    //   at each loop, we are picking the biggest number to longestSequence
    longestSequence = Math.max(longestSequence, count[frontValue]);
  }
  // and Voila, return the longestSequence
  return longestSequence;
}
