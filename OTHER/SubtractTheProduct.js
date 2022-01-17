// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = (n) => {
  let numSplit = n.toString().split("").map(Number);

  let numsMultiplied = numSplit.reduce((a, b) => {
    return a * b;
  });

  let numsAdded = numSplit.reduce((a, b) => {
    return a + b;
  });

  return numsMultiplied - numsAdded;
};

subtractProductAndSum(234); // 15
subtractProductAndSum(4421); // 21
subtractProductAndSum(552); // 38
