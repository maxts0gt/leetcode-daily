// Leetcode No. 100: Same Tree
// Given the roots of two binary trees p and q,
// write a function to check if they are the same or not.
// Two binary trees are considered the same
// if they are structurally identical, and the nodes have the same value.

function isSameTree(p, q) {
  // we will return sameTree in the end
  // initially we will set it to true.
  // try to guess what I am going to do with it
  let sameTree = true;
  // I will create helper function here
  function checkIfSameNode(p, q) {
    // this will first check if whether if both has valid value
    if (!p && !q) {
      // in that case, we just return, means these are same
      return;
      //   then we check if either one of them is not valid
    } else if (!p || !q) {
      // then we will set sameTree to false and return
      sameTree = false;
      return;
      // finally we will check if the value is not same
    } else if (p.val !== q.val) {
      // if not same we set it to false and return
      sameTree = false;
      return;
    }
    // now we call the function on the branches
    checkIfSameNode(p.left, q.left);
    checkIfSameNode(p.right, q.right);
  }
  // then we actually call the function on the tree
  checkIfSameNode(p, q);
  // and return sameTree, it will return value
  // based on the logic we wrote above. Voila!
  return sameTree;
}