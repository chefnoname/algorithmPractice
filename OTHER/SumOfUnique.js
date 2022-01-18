// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

const sumOfUnique = (nums) => {
  let results = 0;
  let uniqueNums = [0];
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];

    doesItAppearOnce(currentNum, nums, uniqueNums);
  }

  return (results += uniqueNums.reduce((a, b) => a + b));
};

const doesItAppearOnce = (num, arr, uniqueNums) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum === num) {
      count++;
    }
  }
  if (count < 2) {
    uniqueNums.push(num);
  }
};

sumOfUnique([1, 2, 3, 2]); // 4
sumOfUnique([1, 2, 3, 4, 5]); // 15
sumOfUnique([1, 1, 1, 1, 1]); // 0
