// Leetcode N.1007: Boats to Save People

// You are given an array people where people[i] is the weight of the ith person,
// and an infinite number of boats where each boat can carry a maximum weight of limit.

// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Time -> O(N log (N))
// Space -> O(N)

const numRescueBoats = (people, limit) => {
  // create two pointers on both sides of array
  let leftPointer = 0
  let rightPointer = people.length - 1
  // also create boat variable and set it to 0
  let numberOfBoats = 0

  //  sort the array to ascending
  people.sort((a, b) => a - b)

  // now create simple while loop
  // condition is: as long as we are not in the middle of the array, loop
  while (leftPointer <= rightPointer) {
    // check if sum lowest and highest value is lower or equal to limit
    if (people[leftPointer] + people[rightPointer] <= limit) {
      // if that's the case, we increase the boat number and move pointers
      numberOfBoats++
      leftPointer++
      rightPointer--
      // otherwise, means that it exceeds limit
    } else {
      // we choose lighter person (or lower number in this case)
      numberOfBoats++
      rightPointer--
    }
  }
  // and after loop is finished we will have the number of boats we need
  // so simply return the boat number. Voila
  return numberOfBoats
}
