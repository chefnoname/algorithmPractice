// Given a sorted array of distinct integers and a target value,

// return the index if the target is found. If not,

// return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = (nums, target) => {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    if (target <= currentNum) {
      result = i;
      return result;
    }

    result = i + 1;
  }

  return result;
};

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2);
searchInsert([1, 3, 5, 6], 7);
