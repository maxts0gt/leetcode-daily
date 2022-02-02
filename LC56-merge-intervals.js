// Leetcode No. 56: Merge Intervals

// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the
// non - overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

const merge = (intervals) => {
  // we handle the null intervals
  if (!intervals.length) return intervals;
  // first sort the intervals from smallest to largest
  intervals.sort((a, b) => a[0] - b[0]);
  // create result array and put 1st interval into it
  const result = [intervals[0]];
  // create simple loop starting at 1
  for (let i = 1; i < intervals.length; i++) {
    // grab the current interval
    const currentInterval = intervals[i];
    // and grab the previous interval
    const prevInterval = result[result.length - 1];
    // compare the current start and previous intervals' end
    if (currentInterval[0] <= prevInterval[1]) {
      // if it lower or equal then merge
      prevInterval[1] = Math.max(currentInterval[1], prevInterval[1]);
      //   if it is not lower or equal
    } else {
      // we just put into result as it is
      result.push(currentInterval);
    }
  }
  //   and then we return the result. Voila!
  return result;
};
