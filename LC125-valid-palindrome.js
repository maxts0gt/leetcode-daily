// "Palindrome" which means word or phrase that reads same backward as forward
// Ex: madam, nurses run, level, racecar etc.

function isPalindrome(inputs) {
	inputs = inputs.toLowerCase().replace(/[\W_]/g, '');

	let left = 0;
	let right = inputs.length - 1;

	while (left < right) {
		if (inputs[left] !== inputs[right]) {
			return false;
		}

		left++;
		right--;
	}

	return true;
}
