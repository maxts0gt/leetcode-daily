// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

const isValid = (s) => {
	// Create array for storing characters
	// But not just an array, it will act as "stack"
	let stack = [];
	// This is the key part
	// Basically we put the pair as key, value for finding
	let pairHashTable = { '(': ')', '{': '}', '[': ']' };

	// Create simple loop
	for (let i = 0; i < s.length; i++) {
		// grab the current character
		let currentChar = s[i];
		// Check if the current char is inside the hash table
		if (pairHashTable[currentChar]) {
			// If it is inside the hash table, put it in the stack
			stack.push(currentChar);
			// If it is not inside the hash,
			// Check if the top of the stack is equal to the current character
		} else if (pairHashTable[stack.pop()] !== currentChar) {
			// If it is not equal, return false
			return false;
		}
	}
	// Basically after the loop, length should be 0
	// Since all of them should be popped
	// If loop is quit before stack is emptied, then pairs are not matching
	return stack.length === 0;
};
