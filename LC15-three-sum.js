// 2sum + 1 = 3Sum
// Today let's do the three sum.
// Instead of O(n3), we should do O(n2) while taking care of duplicates.

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// Such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

const threeSum = (numbers) => {
  // sort it from lowest to highest value
  numbers.sort((a, b) => a - b);
  //   create array for storing our result
  const result = [];
  //   create simple loop
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1]) {
      let leftPointer = i + 1;
      let rightPointer = numbers.length - 1;
      // create while loop
      while (leftPointer < rightPointer) {
        //   grab the current sum
        const currentSum =
          numbers[i] + numbers[leftPointer] + numbers[rightPointer];
        // check if it's the value we want which is 0, then push to result
        if (currentSum === 0) {
          result.push([
            numbers[i],
            numbers[leftPointer],
            numbers[rightPointer],
          ]);
          // making sure we don't have the duplicates in the result
          while (numbers[leftPointer] === numbers[leftPointer + 1])
            leftPointer++;
          while (numbers[rightPointer] === numbers[rightPointer + 1])
            rightPointer--;
          // in any case we move the pointers to the mid
          leftPointer++;
          rightPointer--;
          // if current sum lower than 0 then we move left to center
        } else if (currentSum < 0) {
          leftPointer++;
          //   else, currentSum > 0, we move right to center
        } else {
          rightPointer--;
        }
      }
    }
  }
  // Voila, return the result
  return result;
};
