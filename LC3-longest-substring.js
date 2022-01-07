// *** Longest Substring Without Repeating *** //
// Given a string s, find the length of the longest substring without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3 this
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.

// Time -> O(n) -> Each character visited once
// Space -> O(min(m,n)) -> N of keys are bound by string "n" and size of chars "m"

function lengthOfLongestSubstring(s) {
	// Empty hash, start of window at 0, max length is 0
	let windowCharsMap = {};
	let windowStart = 0;
	let maxLength = 0;
	// Loop through strings
	for (let i = 0; i < s.length; i++) {
		// current character (it's also always end of the window)
		const endChar = s[i];
		// make sure current character is not found in sliding window
		if (windowCharsMap[endChar] >= windowStart) {
			// if so update the window start
			windowStart = windowCharsMap[endChar] + 1;
		}
		// put the current characters in the hash
		windowCharsMap[endChar] = i;
		// Now only unique values are left
		// Max length is higher value of:
		// between maxLength and end of thewindow - start of the window
		maxLength = Math.max(maxLength, i - windowStart + 1);
	}
	// After loop, return the maximum length
	return maxLength;
}
