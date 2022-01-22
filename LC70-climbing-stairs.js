// Leetcode 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top ?

// Example 1:

// Input: n = 3
// Output: 3

// 1 stairs - 1 step -> [1] -> one short step
// 2 stairs - 2 steps -> [1, 1] [2] -> two short steps or one long step
// 3 stairs - 3 steps -> [1, 2] [2, 1] [1, 1, 1] ) -> take one long step and one short
// 4 stairs - 5 steps -> [1, 1, 2] [2, 2] [1, 2, 1] [2, 1, 1] [1, 1, 1, 1] -> look at the logic here
// Time -> O(n)
// Space -> O(n)
const climbStairs = (stairs) => {
  // basically, if stairs are 3 or less, just return the stairs
  if (stairs <= 3) return stairs;

  // however, unless you are really tall and stairs 3+n is difficult
  // So you have step before in the middle.
  let steps = [0, 1, 2, 3];

  // Simple loop for
  for (let i = 4; i <= stairs; i++) {
    // basically you can reach to Nth stair from n-1 or n-2 stair
    // that's why we just add them to give the answer for Nth stair
    steps.push(steps[i - 1] + steps[i - 2]);
  }
  // And then return steps corresponding to the stairssteps
  return steps[stairs];
};
