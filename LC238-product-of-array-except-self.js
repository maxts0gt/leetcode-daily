// Product of Array Except Self
// Given an integer array nums, return an answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

const productExceptSelf = (nums) => {
  // Let's say our initial input is [1,2,3,4]
  // We will then create equal number of 1s of array
  let output = nums.map((n) => 1);
  // Set our multiplier's initial value to 1
  let product = 1;

  // Inside the loop, we will start messing with numbers
  for (let i = 0; i < nums.length; i++) {
    // Change the index's value by the result of the multiplication
    output[i] = output[i] * product;
    // Update our multiplier for next round, which is hard to track but it works
    product = product * nums[i];
  }
  // As a result our [1, 2, 3, 4] is changed to [1, 1, 2, 6]

  product = 1; // Set multiplier to 1
  // Now in the next round of loop, but this time loop from the right
  for (let j = nums.length - 1; j >= 0; j--) {
    // Change the index's value by the result of the multiplication
    output[j] = output[j] * product;
    // Update our multiplier for next round, which is hard to track but it works
    product = product * nums[j];
    // And magically, [1, 1, 2, 6] is changed to [24, 12, 8, 6]
  }
  // And finally return the output
  return output;
};
