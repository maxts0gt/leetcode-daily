// Leetcode 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Time -> O(n)
// Space -> O(n)

function twoSum(arr, target) {
  // we will need hash table to store and check values later
  const hashStore = {};
  // and array to return the index values that Leetcode need
  const result = [];

  // we start by creating simple loop
  for (let i = 0; i < arr.length; i++) {
    // grab the current numbers
    const num = arr[i];
    // Subtract current number from the target
    // So we know what number we need (9 - 2 = 7)
    // 7 is what we need
    const numberWeNeed = target - num;
    // now we need to check that if have the 7 in the hash
    // if it's not there, which is falsy value
    // In other words 0 that's not equal to undefined
    if (hashStore[numberWeNeed] !== undefined) {
      // I guess we found the number we need
      //  so we push the index num to array
      result.push(i);
      // And the index number of the number we need
      result.push(hashStore[numberWeNeed]);
    }
    // Here we stores index numbers with its number
    hashStore[num] = i;
  }
  //   Finally we return the result
  //    which is index numbers we need
  return result;
}
