//Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc.

//Make sure to start counting your positions from 1 (and not 0).

const incrementer = (nums) => {
  return nums.map((n, i) => {
    return n + i + 1 >= 10
      ? Number((n + i + 1).toString().split("").pop())
      : n + i + 1;
  });
};

incrementer([1, 2, 3]);
incrementer([4, 6, 7, 1, 3]);
incrementer([4, 6, 7, 1, 3]);
