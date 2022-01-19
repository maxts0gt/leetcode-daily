// Leetcode 152. Maximum Product Subarray

// Given an integer array nums, find a contiguous non-empty subarray
// within the array that has the largest product, and return the product.

// Example
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// This can't be [2,3,-2] because 2*3*-2 = -8 which is lower than 6

// Time -> O(n)
// Space -> O(n)

function maxProduct(nums) {
  // These two are arrays they start at 0
  let biggerNumber = [nums[0]];
  let smallerNumber = [nums[0]];
  // This one is actual value at 0
  let maxNumber = nums[0];
  // We create simple loop starting at index 1, not 0
  for (let i = 1; i < nums.length; i++) {
    //   Grab the current value as usual
    const num = nums[i];

    //   biggerNumber is the largest value
    biggerNumber[i] = Math.max(
      num,
      num * biggerNumber[i - 1],
      num * smallerNumber[i - 1]
    );

    // smallerNumber is the smallest value
    smallerNumber[i] = Math.min(
      num,
      num * biggerNumber[i - 1],
      num * smallerNumber[i - 1]
    );

    //  to find max number, we only need bigger ones,
    //  check if biggerNumber is bigger than maxNumber,
    //  if so update the maxNumber, else maxNumber is the maxNumber
    maxNumber = Math.max(maxNumber, biggerNumber[i]);
  }
  // Voila, return the maxNumber!
  return maxNumber;
}
