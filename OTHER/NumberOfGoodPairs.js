// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

const numIdenticalPairs = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let nextNum = nums[j];

      if (currentNum === nextNum && i < j) {
        count++;
      }
    }
  }

  return count;
};

numIdenticalPairs([1, 2, 3, 1, 1, 3]); // 4
numIdenticalPairs([1, 1, 1, 1]); // 6
numIdenticalPairs([1, 2, 3]); // 0
