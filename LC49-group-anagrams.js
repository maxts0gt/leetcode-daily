// Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time O(N K log K) -> N is # of strings, K is length of strings
// Space O(N K) -> data stored in hash table
function groupAnagrams(strs) {
	// Create empty hash table
	let grouped = {};
	// Create loop
	for (let i = 0; i < strs.length; i++) {
		// Grab the current words
		currentWord = strs[i];
		// Split, sort and join the strings
		// As a result all of them will be in same order
		// So that we can check if we have it in the object
		const key = currentWord.split('').sort().join('');
		// if we don't have it in the object, we create the empty array
		if (!grouped[key]) {
			grouped[key] = [];
		}
		// And then we start to pushing them to the arrays
		grouped[key].push(currentWord);
	}

	// After loop finishes, groups will be filled up
	// Then we create arrays of array from the arrays of object
	// And return it. Voila!
	return Object.values(grouped);
}
