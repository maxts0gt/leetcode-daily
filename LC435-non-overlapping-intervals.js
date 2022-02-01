// Leetcode No.435: Non-overlapping intervals

// Given an array of intervals intervals where intervals[i] = [starti, endi],
// return the minimum number of intervals you need to remove
// to make the rest of the intervals non - overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

const eraseOverlapIntervals = (intervals) => {
  // we take care of exception first
  if (intervals.length === 0) return 0;
  // create variable to count the result, basically how many we removed
  let result = 0;
  // then we sort intervals by starting intervals from smallest to largest
  intervals.sort((a, b) => a[0] - b[0]);
  // then we grab the first intervals end time [[1,2],[3,4],[1,3]] -> 2
  let prevEnd = intervals[0][1];
  // now we create simple loop starting at second interval
  for (let i = 1; i < intervals.length; i++) {
    // then we grab the current intervals start and end times
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];
    //   and then we check if the start time is smaller than the end time
    // then we remove the interval
    if (currentStart < prevEnd) {
      // we add to the result every time we remove it
      result++;
      //  here is we are removing by choosing the smallest interval end time
      // basically we are removing the that finishes last, so keeping the small
      prevEnd = Math.min(currentEnd, prevEnd);
      //   if it is not smaller
    } else {
      // we move on by updating the prevEnd and move on to next
      prevEnd = currentEnd;
    }
  }
  // all we left is return the result which updated in the loop. Voila!
  return result;
};
