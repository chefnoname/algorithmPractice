// Given an integer array nums sorted in non-decreasing order,

// remove the duplicates in-place such that each unique element appears only once.

// The relative order of the elements should be kept the same.

const removeDuplicates = (nums) => {
  let results = [];

  nums.forEach((num, ind) => {
    if (num !== nums[ind + 1]) {
      results.push(num);
    }
  });

  return results.length;
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

removeDuplicates([1, 1, 2]);
