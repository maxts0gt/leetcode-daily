// Leetcode No. 21: Merge Two Sorted Lists

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Example 1:
// Input: (list1 = [1, 2, 4]), (list2 = [1, 3, 4]);
// Output: [1, 1, 2, 3, 4, 4];

function mergeTwoLists(l1, l2) {
  // first we create new head
  const newHead = { next: null };
  // then currentNode to dummy head
  let currentNode = newHead;
  // create simple while loop
  while (l1 && l2) {
    //  check if l1 val is lower than l2
    if (l1.val < l2.val) {
      // if so, currentNode's next is l1
      currentNode.next = l1;
      //   currentNode itself is currentNode's next
      currentNode = currentNode.next;
      //  l1 is l1.next. basically logic is check if value is high or low
      // depending on that move point values to the lower one and move one
      l1 = l1.next;
      // if l2 is lower than l1, then we do the same for l2
    } else {
      currentNode.next = l2;
      currentNode = currentNode.next;
      l2 = l2.next;
    }
  }
  // once the while loop is finished, one of the list will have some left
  // then we set the currentNode's next value to whichever is left
  currentNode.next = l1 || l2;
  // then return the new head which has all the nodes pointing in order
  return newHead.next;
}