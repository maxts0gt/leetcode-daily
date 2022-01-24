// Leetcode 55. Jump Game

// You are given an integer array nums. -> no negatives
// You are initially positioned at the array's first index, -> at 0
// and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Time -> O(n^2)
// Space -> O(n)
function canJump(nums) {
  // we create array for storing whether each number can move on
  //   we will fill this with falses and later on as we go, we update them as true
  let canJump = new Array(nums.length).fill(false); // [2,3,1,1,4]->[F,F,F,F,F]
  //   since we are starting at 0 let's put the first value to be true
  canJump[0] = true; // [2,3,1,1,4]->[T,F,F,F,F]
  //   create simple loop starting at 1, this is place the we will jump at
  for (let placeToJump = 1; placeToJump < nums.length; placeToJump++) {
    // create a loop inside the loop, he/she is the jumper
    for (let jumper = 0; jumper < placeToJump; jumper++) {
      // now this is where the logic comes
      // if jumper's current place is true (so he reached it)
      // and jumper's current place's index + jumper's value is > or === to placeToJump
      if (canJump[jumper] && jumper + nums[jumper] >= placeToJump) {
        // then we can jump to that place, so we will set it as true
        canJump[placeToJump] = true;
        // we don't need to check other jump options if we can reach it, so break from here
        break;
      }
    }
  }
  // in the end, we will return the last value inside canMoveOn array
  // it will return whatever the result came out of the loop. Voila!
  return canJump[canJump.length - 1]; //[T,T,T,T,T] - return the last
}
