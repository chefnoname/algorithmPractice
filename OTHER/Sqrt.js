// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated,

// and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

const mySqrt = (num) => {
  let counter = 0;

  while (counter * counter < num) {
    counter++;
  }

  if (counter * counter > num) {
    counter--;
  }

  return counter;
};

mySqrt(4);
mySqrt(25);
mySqrt(8);
mySqrt(169);
mySqrt(7);
