// Reversing an integer means to reverse all its digits.

// For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

// Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

const isSameAfterReversals = (num) => {
  let numberReversed = num.toString().split("").reverse().join("");

  numberReversed = Number(numberReversed);

  let isItTheSameReversed = numberReversed
    .toString()
    .split("")
    .reverse()
    .join("");
  return Number(isItTheSameReversed) === num;
};

isSameAfterReversals(526); // true
isSameAfterReversals(1800); // false
isSameAfterReversals(871234312);
