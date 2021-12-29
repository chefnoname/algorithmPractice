// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  let result = [];

  nums.forEach((num, i) => {
    let currentNum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      let nextNum = nums[j];

      if (currentNum + nextNum === target) {
        result.push(i, j);
      }
    }
  });

  return result;
};

twoSum([2, 7, 11, 15], 9); // [0, 1]
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
