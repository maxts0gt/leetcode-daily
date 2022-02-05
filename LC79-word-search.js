// Leetcode No.79: Word Search

// Time -> O(n * m )
// Space -> O(1)
function exist(board, word) {
  // we create value called found and set it to false intially
  let found = false;

  // here we are basically looping through matrix
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      // then we check if we are at the first letter of the word
      if (board[row][col] === word[0]) {
        // if we are the first letter, then we call the function
        // which we will create below
        DFS(row, col, 0, word);
      }
    }
  }
  // creating function called DFS or Depth First Search
  function DFS(row, col, index, word) {
    // if we have found letter
    if (index === word.length) {
      // then set found to true and return (no need to keep traversing)
      found = true;
      return;
    }
    // also we check if we are in valid bounds
    if (
      row < 0 ||
      row >= board.length ||
      col < 0 ||
      col >= board[0].length ||
      // also check whether we don't have the letter
      word[index] !== board[row][col] ||
      // or if we already have it
      found
    ) {
      // if so, then we just return
      return;
    }
    // here we are marking the visited value, so we don't use it agian
    let temp = board[row][col];
    board[row][col] = '';
    // here we are checking four directions for the next word
    DFS(row + 1, col, index + 1, word);
    DFS(row - 1, col, index + 1, word);
    DFS(row, col + 1, index + 1, word);
    DFS(row, col - 1, index + 1, word);
    // after running the four sides, set back the current value
    // so that for our loop will keep running
    board[row][col] = temp;
  }
  // after going through the matrix, we return the found
  // it will be set false or true depending on the condition above. Voila!
  return found;
}
