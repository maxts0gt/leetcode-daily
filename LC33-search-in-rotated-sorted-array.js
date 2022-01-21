// First helper function to find inflection point [4, 5, 1, 2, 3]
// Index 2 or number 1 is the inflection point

// Remember our yesterday's function.
// If didn't see that one!
// But hey, this function is basically finding the inflection point
// Basically [4, 5, 1, 2, 3] -> index number 2 is the inflection point
function findInflectionPoint(nums) {
  let left = 0;
  let right = nums.length - 1;

  if (nums.length === 1) {
    return 0;
  }

  if (nums[left] < nums[right]) {
    return 0;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid - 1]) {
      return mid;
    }

    if (nums[mid] > nums[mid + 1]) {
      return mid + 1;
    }

    if (nums[mid] < nums[left]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

// Second helper function is to actually find the target
// As you know, this is a very simple binary search
function binarySearch(nums, target, left, right) {
  // basically we start while loop with given left and right
  //  if left is bigger than right
  while (left <= right) {
    //   Find the mid point
    const mid = Math.floor((left + right) / 2);
    // if middle number is equal to target
    if (nums[mid] === target) {
      // return middle index
      return mid;
      // if middle index is lower than target
    } else if (nums[mid] < target) {
      // we move the left up
      left = mid + 1;
    } else {
      // else we move the right down
      right = mid - 1;
    }
  }
  // If it is not there, return -1
  return -1;
}

// Leetcode 33.
// Search in Rotated Sorted Array

// Given the array nums after the possible rotation and an integer target,
// return the index of target if it is in nums, or - 1 if it is not in nums.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Time -> O(log n)
// Space -> O(1)

// Basically we solve it like divide and conquer
// We use two helper functions (one is to find inflection point)
// Basically [4, 5, 1, 2, 3] -> index number 2 is the inflection point
function search(nums, target) {
  // Grab the inflection point index number
  const minimumNumberIndex = findInflectionPoint(nums);
  // We use that inflection number two divide our array into two
  //   Use binary search on both of the array and grab them
  // First array starts from index 0 to right before the inflection point
  const left = binarySearch(nums, target, 0, minimumNumberIndex - 1);
  // Second array starts from index inflection point to end of the array
  const right = binarySearch(nums, target, minimumNumberIndex, nums.length - 1);
  // Then from the both results, we return the max
  return Math.max(left, right);
}
