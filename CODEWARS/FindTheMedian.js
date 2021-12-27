//Your non-profit company has assigned you the task of calculating some simple statistics on donations.

//You have an array of integers, representing various amounts of donations your company has been given. In particular, you're interested in the median value for donations.

//The median is the middle number of a sorted list of numbers. If the list is of even length, the 2 middle values are averaged.

//Write a function that takes an array of integers as an argument and returns the median of those integers.

const median = (arr) => {
  let results = 0;

  let sortedArr = arr.sort(function (a, b) {
    return a - b;
  });

  if (sortedArr.length % 2 !== 0) {
    results = sortedArr[(sortedArr.length - 1) / 2];
  } else {
    results =
      (sortedArr[sortedArr.length / 2] + sortedArr[sortedArr.length / 2 - 1]) /
      2;
  }

  return results;
};

median([33, 99, 100, 30, 29, 50]);
median([3, 2, 1]);
