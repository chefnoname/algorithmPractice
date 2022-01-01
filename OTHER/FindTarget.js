// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

const targetIndices = (nums, target) => {
  let results = [];

  nums
    .sort((a, b) => a - b)
    .forEach((num, ind) => {
      if (num === target) {
        results.push(ind);
      }
    });

  return results;
};

targetIndices([1, 2, 5, 2, 3], 2);
