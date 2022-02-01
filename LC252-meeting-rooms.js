// Leetcode No252: Meeting Rooms

// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2] determine if a person could attend all meetings.

// Example1

// Input: intervals = [(0, 30), (5, 10), (15, 20)]
// Output: false
// Explanation:
// (0, 30), (5, 10) and (0, 30), (15, 20) will conflict

// Time -> O(n log n)
// Space -> O(n)
const canAttendMeetings = (intervals) => {
  // basically we grab all "start" and "end" times
  // put them into array, so create empty arrays first
  const startTime = [];
  const endTime = [];
  // then create simple loop to go through the list
  for (let i = 0; i < intervals.length; i++) {
    //grab the current values. Ex: (0, 30) , (5, 10)
    // put the first value in the startTime [0] -> [0, 5]
    startTime.push(intervals[0]);
    // put the second value in the endTime [30] -> [30, 10]
    endTime.push(intervals[1]);
  }
  // then we will sort the arrays for comparison later on
  startTime.sort((a, b) => a - b); // [0, 5] -> [0, 5]
  endTime.sort((a, b) => a - b); // [30, 10] -> [10, 30]
  // finally we will go through startTime array and do comparisons
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i + 1] < endTime[i]) return false;
  }
  // and if it doesn't return false,
  // then we don't have conflicts. So return true!
  return true;
};
