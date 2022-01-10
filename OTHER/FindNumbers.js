// Given an array nums of integers,

// return how many of them contain an even number of digits.

const findNumbers = (nums) => {
  let results = nums.map(String).filter((num) => {
    return num.length % 2 === 0;
  }).length;

  return results;
};

findNumbers([12, 345, 2, 6, 7896]); // 2
findNumbers([555, 901, 482, 1771]); // 1
