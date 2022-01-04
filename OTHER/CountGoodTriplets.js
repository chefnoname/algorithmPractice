// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

const countGoodTriplets = (arr, a, b, c) => {
  let goodTriplet = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let num1 = arr[i];
        let num2 = arr[j];
        let num3 = arr[k];

        goodTriplet += doesItSatisfyTheCondition(num1, num2, num3, a, b, c);
      }
    }
  }

  return goodTriplet;
};

const doesItSatisfyTheCondition = (num1, num2, num3, a, b, c) => {
  let count = 0;

  let absoluteNum1 = Math.abs(num1 - num2);
  let absoluteNum2 = Math.abs(num2 - num3);
  let absoluteNum3 = Math.abs(num1 - num3);

  if (absoluteNum1 <= a && absoluteNum2 <= b && absoluteNum3 <= c) {
    count++;
  }

  return count;
};

countGoodTriplets([3, 0, 1, 1, 9, 7], 7, 2, 3); // 4
countGoodTriplets([1, 1, 2, 2, 3], 0, 0, 1); // 0
