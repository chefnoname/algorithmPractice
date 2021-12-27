//Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order).

//The original array will be not empty and will contain at least "number" even numbers.

const evenNumbers = (array, number) => {
  let evenNumArr = array
    .filter((num) => {
      return num % 2 === 0;
    })
    .reverse();

  return evenNumArr.splice(0, number).reverse();
};

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
