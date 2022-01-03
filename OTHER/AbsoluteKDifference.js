// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.

const countKDifference = (nums, k) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let nextNum = nums[j];

      if (currentNum - nextNum === k || nextNum - currentNum === k) {
        count++;
      }
    }
  }

  return count;
};

countKDifference([1, 2, 2, 1], 1); // 4
countKDifference([3, 2, 1, 5, 4], 2); // 3
countKDifference([1, 3], 3); // 0
