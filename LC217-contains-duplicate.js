const containsDuplicate = (nums) => {
  // Create object for check the values
  const hashForStoring = {};

  // Create simple loop
  for (let i = 0; i < nums.length; i++) {
    // Grab the current number
    currentNumber = nums[i];
    // Check if the current number is in the hash table
    if (hashForStoring[currentNumber]) {
      // If it exists which returns true, then true
      // And exit the loop
      return true;
      //   Else if it is not exist in the hash table
    } else {
      // Put it in the hash table and assign true
      hashForStoring[currentNumber] = true;
    }
  }
  // If no true returns from the loop, which is why we are here
  // Return false! Means there is not duplicate value
  return false;
};
