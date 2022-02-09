// Leetcode No.102: Binary Tree Level Order Traversal
// Given the root of a binary tree,
// return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Example: 1
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Time -> O(n)
// Space -> O(1)
function levelOrder(root) {
  // first we create empty result array to store the output
  const result = [];
  // then we create helper function
  // basically this will traverse the tree
  function helperFunction(node, depth) {
    // if there is no node, then we just return
    if (!node) return;

    // if the result has no valid input {
    if (!result[depth]) {
      // we assign it empty array
      result[depth] = [];
    }

    // if result has valid input, we make sure of it above
    // we push the values into it
    result[depth].push(node.val);
    // then we go through left and right branches (recursive)
    helperFunction(node.left, depth + 1);
    helperFunction(node.right, depth + 1);
  }
  // we call the helper function at the outsde
  helperFunction(root, 0);
  // and return the result at the end. Voila!
  return result;
}
