// Write a JavaScript program to get the integers in range (x, y).
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

const numbersInRange = (num1, num2) => {
  let results = [];

  getTheNumbersInRange(num1 + 1, num2, results);

  return results;
};

const getTheNumbersInRange = (num1, num2, results) => {
  if (num1 === num2) {
    return results;
  }

  results.push(num1);

  return getTheNumbersInRange(num1 + 1, num2, results);
};

numbersInRange(2, 9); // [ 3, 4, 5, 6, 7, 8 ]
numbersInRange(55, 60); // [ 56, 57, 58, 59 ]
