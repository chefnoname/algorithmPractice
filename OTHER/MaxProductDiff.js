// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

const maxProductDifference = (nums) => {
  let largestNum =
    nums.sort((a, b) => b - a)[0] * nums.sort((a, b) => b - a)[1];

  let smallestNum =
    nums.sort((a, b) => a - b)[0] * nums.sort((a, b) => a - b)[1];

  return largestNum - smallestNum;
};

maxProductDifference([5, 6, 2, 7, 4]); // 34
maxProductDifference([4, 2, 5, 9, 7, 4, 8]); // 64
