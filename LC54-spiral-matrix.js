// Leetcode No.54: Spiral Matrix

function spiralOrder(matrix) {
  //   create array to store values
  const spiralArray = [];
  // if there is no value,
  if (matrix.length === 0) {
    //   just return the array
    return spiralArray;
  }

  // now to move in circle around a central point
  // we set 4 points and later on, as we finish the lanes
  // we will decrease center by moving the points
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  let direction = 'right';

  // this while simply means that "we are not in the center go to center"
  while (top <= bottom && left <= right) {
    // first we check the directions
    if (direction === 'right') {
      // then loop depending on the values
      for (let i = left; i <= right; i++) {
        // then basically puts everything on the way to the array
        spiralArray.push(matrix[top][i]);
      }
      // once we are at the position, we exclude that lane on next loop
      top++;
      // after that we set the direction we move
      direction = 'down';
      //   rest of the logic is going to be the same as above
    } else if (direction === 'down') {
      for (let i = top; i <= bottom; i++) {
        spiralArray.push(matrix[i][right]);
      }
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) {
        spiralArray.push(matrix[bottom][i]);
      }
      bottom--;
      direction = 'top';
    } else if (direction === 'top') {
      for (let i = bottom; i >= top; i--) {
        spiralArray.push(matrix[i][left]);
      }
      left++;
      direction = 'right';
    }
  }
  // at the end of our while loop, we return spiralArray
  return spiralArray;
}
