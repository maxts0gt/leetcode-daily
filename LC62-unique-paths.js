// Leetcode No.62: Unique Paths

// Problem is basically something like below.
// Robot starts at 0 and goes to 21.
// 0 | 1 | 1 | 1 | 1 | 1;
// 1 | 2 | 3 | 4 | 5 | 6;
// 1 | 3 | 6 | 10 | 15 | 21;

// Exercise: 1
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Time -> O(n * m)
// Space -> O(n * m)

function uniquePaths(m, n) {
  // we create matrix for storing values
  const matrix = [];
  // then we create subarray to represent the matrix
  for (let row = 1; row <= n; row++) {
    matrix.push([]);
  }
  // and then we fill out the first rows of matrix
  for (let row = 0; row < n; row++) {
    matrix[row][0] = 1;
  }

  // then fill out the first columns of matrix
  for (let col = 0; col < m; col++) {
    matrix[0][col] = 1;
  }

  // then create loop inside the loop, basically going through every number
  // assigning each cols to each rows, notice that it starts at 1
  for (let row = 1; row < n; row++) {
    for (let col = 1; col < m; col++) {
      // logic is that add previous row and col value together and create new cell
      matrix[row][col] = matrix[row][col - 1] + matrix[row - 1][col];
    }
  }
  // then we return the last row on the last column
  return matrix[matrix.length - 1][m - 1];
}
