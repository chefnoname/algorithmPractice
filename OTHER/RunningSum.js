// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

const runningSum = (nums) => {
  let count = 0;

  return nums.map((num) => (count += num));
};

runningSum([1, 2, 3, 4]); // [ 1, 3, 6, 10 ]
runningSum([3, 1, 2, 10, 1]); // [ 3, 4, 6, 16, 17 ]
runningSum([1, 1, 1, 1, 1]); // [ 1, 2, 3, 4, 5 ]
