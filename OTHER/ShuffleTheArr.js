// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = (nums, n) => {
  let numsX = nums.splice(0, n);
  let numsY = [];
  let results = [];

  for (let i = n; i >= 0; i--) {
    if (nums[i]) {
      numsY.unshift(nums[i]);
    }
  }

  for (let i = 0; i < numsX.length; i++) {
    let currentXNum = numsX[i];
    let currentYNum = numsY[i];

    results.push(currentXNum, currentYNum);
  }

  return results;
};

shuffle([2, 5, 1, 3, 4, 7], 3); // [ 2, 3, 5, 4, 1, 7 ]
shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4); // [ 1, 4, 2, 3, 3, 2, 4, 1 ]
shuffle([1, 1, 2, 2], 2); // [ 1, 2, 1, 2 ]
