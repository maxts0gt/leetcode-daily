// Leetcode N.19: Remove Nth From End of List
// Given the head of a linked list, remove the nth node
//  from the end of the list and return its head.

// Example 1:
// Input: (head = [1, 2, 3, 4, 5]), (n = 2);
// Output: [1, 2, 3, 5];

function removeNthFromEnd(head, n) {
  // first we create dummy head
  // at the end of the code we will only need to return this
  let dummyHead = { next: head };
  // then we create slow and fast pointers
  let slow = dummyHead;
  let fast = dummyHead;
  // create simple loop, but set the loop length at n
  // so we can move the fast at +n speed
  for (let i = 1; i <= n; i++) {
    fast = fast.next;
  }
  // then we create while loop to move the pointers
  // while fast is not at the last loop
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  // once fast is at the last, while loop will exit
  // then all we need is set the slow to point and at fast
  // so the node between it will not pointed and lost
  slow.next = slow.next.next;
  // and the we return the head. Voila!
  return dummyHead.next;
}
