// You are given two integer arrays of equal length target and arr. In one step, you can select any non-empty sub-array of arr and reverse it. You are allowed to make any number of steps.

// Return true if you can make arr equal to target or false otherwise.

const canBeEqual = (target, arr) => {
  let targetSorted = target.sort();
  let arraySorted = arr.sort();

  return targetSorted.every((num, ind) => {
    return num === arraySorted[ind];
  });
};

canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]);
