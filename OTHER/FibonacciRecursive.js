// Write a JavaScript program to get the first n Fibonacci numbers. Go to the editor
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

const fibonacciNum = (n) => {
  let results = [0, 1];

  getTheNextNum(results, n - 2);

  return results;
};

const getTheNextNum = (arr, num) => {
  if (num === 0) {
    return arr;
  }

  let nextNum = arr[arr.length - 1] + arr[arr.length - 2];

  arr.push(nextNum);

  return getTheNextNum(arr, num - 1);
};

fibonacciNum(5); // [ 0, 1, 1, 2, 3 ]
fibonacciNum(10); // [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
