// Leetcode 153. Find Min in Rotated Sorted Array
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// You must write an algorithm that runs in O(log n) time.

function findMin(nums) {
  // Prepare for two pointers, simply meaning
  // that we will control the array from both sides
  let left = 0;
  let right = nums.length - 1;
  //   if it's one number just return this
  if (nums.length === 1) {
    return nums[0]; // [3] or any number
  }
  // Left should always be higher. Remember this is sorted
  if (nums[left] < nums[right]) {
    return nums[left]; // [1, 2, 3, 4, 5]
  }
  // create simple while loop where it real work begins
  while (left <= right) {
    // find relevant values like right, left, middle
    const middleIndex = Math.floor((left + right) / 2); // (0 + 4) / 2 = 2
    const insideTheLoopLeftValue = nums[left];
    const middleValue = nums[middleIndex];
    const leftToMiddle = nums[middleIndex - 1];
    const rightToMiddle = nums[middleIndex + 1];
    //   These are simple comparisons
    //   Basic logic is that we grabbed the both sides of the middle
    //   Try to find logic by comparing them with middle since it's sorted
    if (middleValue > rightToMiddle) {
      return rightToMiddle; // [3, 4, 5, 1, 2] looks like this
    } else if (leftToMiddle > middleValue) {
      return middleValue; // [4, 5, 1, 2, 3] looks like this
    }
    // If it's not there we will move the left and right accordingly
    if (middleValue > insideTheLoopLeftValue) {
      left = middleIndex + 1;
    } else {
      right = middleIndex - 1;
    }
  }
}
