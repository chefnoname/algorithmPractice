// Given an integer array nums, return the third distinct maximum number in this array.

// If the third maximum does not exist, return the maximum number.

const thirdMax = (nums) => {
  let sortedNums = nums.sort((a, b) => {
    return b - a;
  });
  let result = 0;
  let uniqueArr = [];
  for (let i = 0; i <= sortedNums.length; i++) {
    let currentNum = sortedNums[i];

    for (let j = i + 1; j <= sortedNums.length; j++) {
      let nextNum = sortedNums[j];

      if (currentNum !== nextNum && !uniqueArr.includes(currentNum)) {
        uniqueArr.push(currentNum);
      }
    }
  }

  if (uniqueArr.length > 2) {
    result = uniqueArr[2];
  } else {
    result = uniqueArr[0];
  }

  return result;
};

thirdMax([3, 2, 1]); // 1
thirdMax([2, 2, 3, 1]); // 1
thirdMax([5, 2, 2]); // 5
thirdMax([1, 2]); // 2
