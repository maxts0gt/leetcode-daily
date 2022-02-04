// Leetcode No.73: Set Matrix Zeroes

// Example
// Input: matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
// Output: [
//   [1, 0, 1],
//   [0, 0, 0],
//   [1, 0, 1],
// ];

function setZeroes(matrix) {
  // grab the length of rows
  const rows = matrix.length;
  // grab the length of the colums
  const cols = matrix[0].length;
  //   we create origin value and set that to false initially
  let origin = false;

  //   then we start going through every cols on every row
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // go and look for "0"
      if (matrix[i][j] === 0) {
        // we set first row 0 to 0
        matrix[0][j] = 0;
        // also if first column has 0, we skip the origin
        if (i > 0) {
          // then set all of the column's first value to 0
          matrix[i][0] = 0;
        } else {
          // otherwise, meaning that there is 0 and it is first value
          // we set the origin to true because we will handle it later
          origin = true;
        }
      }
    }
  }
  // now we start to set martrix values to 0
  // depending on the first row's or column's value we set earlier
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      // if the first row or column is 0
      if (matrix[0][j] === 0 || matrix[i][0] === 0) {
        // then set it to 0
        matrix[i][j] = 0;
      }
    }
  }
  // here solve first column's values
  if (matrix[0][0] === 0) {
    for (let i = 0; i < rows; i++) {
      //  we set every value on first column to 0
      matrix[i][0] = 0;
    }
  }
  // here we solve first row's values
  if (origin) {
    for (let j = 0; j < cols; j++) {
      // we set every value on first row to 0
      matrix[0][j] = 0;
    }
  }
}
