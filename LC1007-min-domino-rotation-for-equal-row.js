// Leetcode N.1007: Minimum Domino Rotations For Equal Row

// Example 1:

// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation:

// The first figure represents the dominoes as given by tops and bottoms:
// before we do any rotations.

const minDominoRotations = (tops, bottoms) => {
  // create array called numberOfTops filled with 0
  const numberOfTops = new Array(7).fill(0)
  // create array called numberOfBottoms filled with 0
  const numberOfBottoms = new Array(7).fill(0)
  // create array called sameNumbers filled with 0
  const sameNumbers = new Array(7).fill(0)
  //  create simple loop where we loop through top dominos
  for (let i = 0; i < tops.length; i++) {
    // check if the current number is inside the numberOfTops
    // if it is add 1
    numberOfTops[tops[i]]++
    // same for the bottom part of dominos
    numberOfBottoms[bottoms[i]]++
    // now we check if current top and bottom dominos are same
    // if they are same, then we increase corrisponding
    // number in the sameNumbers by 1
    if (tops[i] === bottoms[i]) sameNumbers[tops[i]]++
  }
  // create another loop, this time we check if rotation is successful
  for (let i = 1; i <= 6; i++) {
    //  check if we have the result
    //  remember we transformed following in the previous loop
    if (numberOfTops[i] + numberOfBottoms[i] - sameNumbers[i] === 6) {
      // if the result is 6, or, if we have all dominos required
      // return the minimum number of rotations
      return Math.min(
        numberOfTops[i] - sameNumbers[i],
        numberOfBottoms[i] - sameNumbers[i]
      )
    }
  }
  // else if nothing is returned, then we return -1
  return -1
}
