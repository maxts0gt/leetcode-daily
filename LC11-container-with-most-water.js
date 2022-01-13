// Container with Most Water

// Okay this one is long to explain
// Just head out to Leetcode 11

// Time -> O(n)
// Space -> O(1)

function maxArea(columns) {
  //   Create maxArea for storing purposes
  let maxArea = 0;
  // Set the start which is index 0
  let left = 0;
  // Set the end which is end of array
  let right = columns.length - 1;
  // Create while loop.
  // While wont exit till we go through all of them
  while (left < right) {
    // Following is the key to our logic
    // Basically, choose the tallest of columns
    // Multiply it by the distance (which is our area)
    // And grab the value
    const currentArea =
      Math.min(columns[left], columns[right]) * (right - left);
    // Update our maxArea which is the bigger one
    maxArea = Math.max(currentArea, maxArea);
    // Decide who which one of the column will move
    if (columns[left] < columns[right]) {
      // if left is shorter then move one step
      left++;
      //   else right moves one step to the mid
    } else {
      right--;
    }
  }
  // Once they meet in the mid or somewhere, while loop will finish
  // We will return the "maxArea" which is the max of all
  return maxArea;
}
