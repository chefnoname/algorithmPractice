// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.

// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

const smallerNumbersThanCurrent = (nums) => {
  let count = 0;
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    count = isItSmaller(currentNum, nums);

    results.push(count);
  }

  return results;
};

const isItSmaller = (num, arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (num > currentNum) {
      count++;
    }
  }

  return count;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]); // [4,0,1,1,3]

smallerNumbersThanCurrent([6, 5, 4, 8]); // [2,1,0,3]
