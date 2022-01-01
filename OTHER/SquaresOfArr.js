// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

const sortedSqr = (nums) => {
  let results = nums.map((num) => num * num).sort((a, b) => a - b);

  return results;
};

sortedSqr([-4, -1, 0, 3, 10]);
