// Leetcode N.1007: Minimum Domino Rotations For Equal Row

// Example 1:

// Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
// Output: 2
// Explanation:

// The first figure represents the dominoes as given by tops and bottoms:
// before we do any rotations.

const minDominoRotations = (tops, bottoms) => {
  const numberOfTops = new Array(7).fill(0)
  const numberOfBottoms = new Array(7).fill(0)
  const sameNumbers = new Array(7).fill(0)
  for (let i = 0; i < tops.length; i++) {
    numberOfTops[tops[i]]++
    numberOfBottoms[bottoms[i]]++
    if (tops[i] === bottoms[i]) sameNumbers[tops[i]]++
  }
  for (let i = 1; i <= 6; i++) {
    if (numberOfTops[i] + numberOfBottoms[i] - sameNumbers[i] == tops.length) {
      return Math.min(
        numberOfTops[i] - sameNumbers[i],
        numberOfBottoms[i] - sameNumbers[i]
      )
    }
  }
  return -1
}
