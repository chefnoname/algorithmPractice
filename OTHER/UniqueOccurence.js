// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

const uniqueOccurrences = (arr) => {
  let occurenceMap = {};
  let occurenceCount = [];

  arr.forEach((item) => {
    if (occurenceMap[item]) {
      occurenceMap[item]++;
    } else {
      occurenceMap[item] = 1;
    }
  });

  Object.entries(occurenceMap).forEach((occurence) => {
    occurenceCount.push(occurence[1]);
  });
  occurenceCount = occurenceCount.sort((a, b) => a - b);

  for (let i = 0; i < occurenceCount.length; i++) {
    let currentNum = occurenceCount[i];
    let nextNum = occurenceCount[i + 1];

    if (currentNum === nextNum) {
      return false;
    }
  }

  return true;
};

uniqueOccurrences([1, 2, 2, 1, 1, 3]); // true
uniqueOccurrences([1, 2]); // false
uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]); // true
