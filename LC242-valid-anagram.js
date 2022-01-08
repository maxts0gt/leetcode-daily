// What is anagram?
// a word, phrase, or name formed by rearranging the letters of another,
// such as spar, formed from rasp

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

function isAnagram(one, two) {
	// Check length for both inputs
	// if length doesn't match return false
	if (one.length !== two.length) {
		return false;
	}
	// Create hash for counting characters in input 'one'
	const hashForInputOne = {};

	// Loop through input one
	for (let i = 0; i < one.length; i++) {
		// Grab the current chararacters
		const currentCharOne = one[i];
		// If character is in the hash, add 1 to the hash or assign 1
		hashForInputOne[currentCharOne] =
			hashForInputOne[currentCharOne] + 1 || 1;
	}

	// Loop through input two
	for (let j = 0; j < two.length; j++) {
		// Grab the current chararacters
		const currentCharTwo = two[j];
		// Check if character is in the hash of 'One'
		// if it returns falsy value return false
		if (!hashForInputOne[currentCharTwo]) {
			return false;
			// If it is in the hash of 'One'
		} else {
			// Use up those values
			hashForInputOne[currentCharTwo]--;
		}
	}
	// After going through all of the steps, if it doesn't return false
	// Then return true! Means it is Anagram!
	return true;
}
