// 104. Maximum Depth of Binary Tree

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes
// along the longest path from the root node down to the farthest leaf node.

function maxDepth(root) {
  // first we create maxDepth variable
  // to record how deep we are in the tree
  let maxDepth = 0;

  //   we create function to traverse the tree
  function traverse(node, currentNode) {
    //   if there is none
    if (!node) {
      // then pick higher value between maxDepth and previousNode
      maxDepth = Math.max(maxDepth, currentNode - 1);
      // then return
      return;
    }

    // otherwise, it means we found node
    // then we go down-left (call inside -> recursive)
    traverse(node.left, currentNode + 1);
    // then we go down-right
    traverse(node.right, currentNode + 1);
    // here we call the function
  }
  // here we are calling the function (outside)
  traverse(root, 1);
  // at the end, we just return the maxDepth value
  // it will be updated during the process
  return maxDepth;
}
