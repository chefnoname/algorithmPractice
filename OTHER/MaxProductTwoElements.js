// Given the array of integers nums, you will choose two different indices i and j of that array.

// Return the maximum value of (nums[i]-1)*(nums[j]-1).

const maxProduct = (nums) => {
  let numsSorted = nums.sort((a, b) => {
    return b - a;
  });

  let largestNum = numsSorted[0] - 1;

  let secondLargestNum = numsSorted[1] - 1;

  return largestNum * secondLargestNum;
};
maxProduct([3, 4, 5, 2]);
