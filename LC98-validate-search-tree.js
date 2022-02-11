// Leetcode No. 98: Validate Search Tree

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// Example 1
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

function isValidBST(root) {
  // first we valid to be true,
  //  as we go we check if it is false, and in the end
  // we return this value's result
  let valid = true;

  // to go through tree, we create helper function
  function helperFunction(node, min, max) {
    // if there is no node, return
    if (!node) return;
    //   if there are both min and max
    // and current node value is lower than min
    //   or higher than max (because it should not be)
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      // we set the value to be false and return
      valid = false;
      return;
    }
    //   then we call the helper function on the branches
    helperFunction(node.left, min, node.val);
    helperFunction(node.right, node.val, max);
  }
  // then we call the function on the tree
  helperFunction(root, null, null);
  //   and finally we return the valid value. Voila!
  return valid;
}
