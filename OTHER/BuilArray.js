// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

const buildArray = (nums) => {
  return nums.map((num, ind) => {
    return nums[nums[ind]];
  });
};

buildArray([0, 2, 1, 5, 3, 4]); // [0,1,2,4,5,3]
buildArray([5, 0, 1, 2, 3, 4]); // [4,5,0,1,2,3]
