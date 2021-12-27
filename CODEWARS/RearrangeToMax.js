//Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number.
//Assume that the argument is an integer.

const maxRedigit = (num) => {
  let results = 0;

  if (num.toString().length > 3 || num.toString().length < 3) {
    results = null;
  } else {
    results = num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("");

    results = Number(results);
  }

  return results;
};

maxRedigit(123);
maxRedigit(3332);
maxRedigit(394);
maxRedigit(236);
