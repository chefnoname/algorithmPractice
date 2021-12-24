// Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

const sumCubes = (n) => {
  let cubedNum = n;
  let results = 0;
  while (cubedNum > 0) {
    results += cubedNum * cubedNum * cubedNum;

    cubedNum--;
  }

  return results;
};

sumCubes(3);
