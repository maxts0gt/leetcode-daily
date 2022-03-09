// Leetcode No. 283: Move Zeroes

// Given an integer array nums,
// move all 0's to the end of it while maintaining the
// relative order of the non - zero elements.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const moveZeroes = (nums) => {
  // first we create pointer "j" and set it to 0\
  let j = 0

  // then we create simple loop on input
  for (let i = 0; i < nums.length; i++) {
    // now here is the logic goes
    // first, we grab and check if the current number is 0
    const currentNumber = nums[i]
    if (currentNumber !== 0) {
      // if it is not equal to 0, replace "j"th number by current number
      nums[j] = nums[i]
      // then increase the j by 1
      j++
    }
  }
  // after the previous loop, there will be no zeroes
  // and we know how many times we replaced zero by the value of "j"
  // then we go to "j"th index and set everything from "j" to the end
  for (let k = j; k < nums.length; k++) {
    nums[k] = 0
  }
  // now we just need to return the result of two loops. Voila!
  return nums
}
