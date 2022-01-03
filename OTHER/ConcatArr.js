// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

const getConcatenation = (nums) => {
  return [...nums, ...nums];
};

getConcatenation([1, 2, 1]); // [1, 2, 1, 1, 2, 1]
getConcatenation([13, 222, 44321]); // [13, 222, 44321, 13, 222, 44321]
getConcatenation([112312, 2234234, 123]); // [112312, 2234234, 123, 112312, 2234234, 123]
