// Leetcode No. 141: Linked List Cycle
// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list,
// where the tail connects to the 1st node(0 - indexed).

function hasCycle(head) {
  // basically this problem is solved by slow and fast pointers
  // you create two pointer and one moves +1 faster
  let slow = head;
  let fast = head;
  // then we create simple while loop
  while (fast && fast.next) {
    // move slow at speed of 1
    slow = slow.next;
    // move fast at speed of 2
    fast = fast.next.next;
    // then we check if they ever meet
    if (slow === fast) {
      // if they meet, we have the cycle
      return true;
    }
  }
  // if it doesn't return true, and we exit while loop
  // then we don't have a cycle so, it is false
  return false;
}
