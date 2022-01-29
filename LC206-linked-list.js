// Leetcode No.206: Linked List

// Given the head of a singly linked list, reverse the list,
// and return the reversed list.

// Example 1
// Input: head = [1, 2, 3, 4, 5];
// Output: [5, 4, 3, 2, 1];

const reverseList = (head) => {
  // in order to go through list we use 3 values
  // I guess this is why it is called "link"
  // first create "prev" value and set it to null
  let prev = null;
  //   then assign head to the current
  let current = head;
  //   now we create while loop -> while(if there is a value)
  while (current) {
    // create temporary value for swapping values
    //   and assign the next value of current to temp
    let temp = current.next;
    // change current.next's value by previous value
    current.next = prev;
    // change the previous value by current value
    prev = current;
    // change current value by temp value
    current = temp;
  }
  // now at the end of the loop, current's value is null
  // and previous value is the current or head value
  // so we just need to return the prev
  return prev;
};
