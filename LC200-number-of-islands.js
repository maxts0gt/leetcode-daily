// Leetcode No.200: Number of Islands

function numIslands(grid) {
  // create count variable to record number of Islands
  let count = 0;
  // then loop through matrix by row and col
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // if we find island which is marked as "1"
      if (grid[row][col] === '1') {
        // then record it in the count varaible
        count++;
        // then we call dfs function
        // its main role is to change 1 to 0
        // so that we won't visit again
        dfs(grid, row, col);
      }
    }
  }

  //   creating "dfs" function here
  function dfs(grid, row, col) {
    //   we check whether we are in the bounds of matrix
    if (
      row < 0 ||
      row >= grid.length ||
      col < 0 ||
      col >= grid[0].length ||
      //   also we check if we on the water
      grid[row][col] === '0'
    ) {
      // then we will just return
      return;
    }
    // and set the island or "1" to "0"
    grid[row][col] = '0';
    //   here we are checking the neighbors of the island
    dfs(grid, row + 1, col);
    dfs(grid, row - 1, col);
    dfs(grid, row, col + 1);
    dfs(grid, row, col - 1);
  }
  // finally, we just need to return the count. Voila!
  return count;
}
