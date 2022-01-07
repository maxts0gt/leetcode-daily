//Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

// Example 2:
// Input: s = "cbbd"
// Output: "bb"

// Time -> O(n^2)
// Space -> O(n

function longestPalindrome(s) {
	// Substring of 1 is considered to be palindromes
	let startIndex = 0;
	let maxLength = 1;

	// Helper function
	function expandAroundMiddle(left, right) {
		// Basically left and right are within the array
		// and values are equal to each other -> Go LOOP!
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			// Checking the current length
			const currentPalLength = right - left + 1;
			// If length is longer than max
			if (currentPalLength > maxLength) {
				// Then the current is the new max
				maxLength = currentPalLength;
				// And start palce is where the left was
				startIndex = left;
			}
			// substracting and adding for the loop to work
			left -= 1;
			right += 1;
		}
	}

	// Basic loop
	for (let i = 0; i < s.length; i++) {
		// Check palindrome
		expandAroundMiddle(i - 1, i + 1);
		// for evens
		expandAroundMiddle(i, i + 1);
	}
	// Return strings between start index and start index + max length
	return s.slice(startIndex, startIndex + maxLength);
}
