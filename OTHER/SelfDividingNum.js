// A self-dividing number is a number that is divisible by every digit it contains.

// For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
// A self-dividing number is not allowed to contain the digit zero.

// Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].

const selfDividingNumbers = (left, right) => {
  let allNumInRange = [];
  let results = [];
  while (left <= right) {
    allNumInRange.push(left);
    left++;
  }

  for (let i = 0; i < allNumInRange.length; i++) {
    let currentNum = allNumInRange[i];
    let itDivides;
    if (currentNum < 10) {
      results.push(currentNum);
    } else if (currentNum % 10 !== 0) {
      itDivides = isItSelfDividing(currentNum);
    }

    if (itDivides) results.push(itDivides);
  }

  return results;
};

const isItSelfDividing = (num) => {
  let numberSplit = num.toString().split("").map(Number);

  for (let i = 0; i < numberSplit.length; i++) {
    let currentNum = numberSplit[i];
    if (num % currentNum !== 0) {
      return;
    }
  }
  return num;
};

selfDividingNumbers(1, 22); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22 ]
selfDividingNumbers(47, 85); // [ 48, 55, 66, 77 ]
selfDividingNumbers(120, 200); // [ 122, 124, 126, 128, 132, 135, 144, 155, 162, 168, 175, 184 ]
