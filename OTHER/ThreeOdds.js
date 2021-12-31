// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.

const threeConsecutiveOdds = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    let nextNum = arr[i + 1] ? arr[i + 1] : 0;
    let thirdNum = arr[i + 2] ? arr[i + 2] : 0;

    if (currentNum % 2 !== 0 && nextNum % 2 !== 0 && thirdNum % 2 !== 0) {
      return true;
    }
  }

  return false;
};
