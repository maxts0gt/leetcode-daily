// Leetcode No. 235: Lowest Common Ancestor of a BST
// Basically it means closest ancestor of the two numbers

// Example 1
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

function lowestCommonAncestor(root, p, q) {
  // first we grab the value p and q
  const pValue = p.val;
  const qValue = q.val;
  //   then we create value for current node
  // initially assign it to the root
  let currentNode = root;
  //   now create while loop on root's validity
  while (root) {
    //   grab the current node's value
    const currentVal = currentNode.val;
    // then we check if the current value is lower than q or p value
    if (currentVal < pValue && currentVal < qValue) {
      // then we go the right side of the tree
      currentNode = currentNode.right;
      // else if current value is greater than p or q value
    } else if (currentVal > pValue && currentVal > qValue) {
      // we go the left side of the tree
      currentNode = currentNode.left;
      //  else that means currentVal is equal to to the p or q
      //   or above condition doesn't meet down the tree
    } else {
      // then we just return whatever the current node is.
      return currentNode;
    }
  }
}
