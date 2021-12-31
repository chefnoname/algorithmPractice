// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = (n) => {
  let counter = n;
  let results = [];

  while (counter > 0) {
    if (counter % 3 === 0 && counter % 5 === 0) {
      results.push("FizzBuzz");
    } else if (counter % 3 === 0) {
      results.push("Fizz");
    } else if (counter % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(counter.toString());
    }

    counter--;
  }

  return results.reverse();
};

fizzBuzz(3); // ['1', '2', 'Fizz']
fizzBuzz(15);
