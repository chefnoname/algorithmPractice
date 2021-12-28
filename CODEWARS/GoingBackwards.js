// Given a long number, return all the possible sum of two digits of it.

// For example, 12345: all possible sum of two digits from that number are:

const number = (sums) => {
  const numberSplit = sums
    .toString()
    .split("")
    .map((num) => Number(num));

  const result = [];

  for (let i = 0; i < numberSplit.length; i++) {
    let current = numberSplit[i];

    for (let j = i + 1; j < numberSplit.length; j++) {
      let currentToAdd = numberSplit[j];
      result.push(current + currentToAdd);
    }
  }

  return result;
};

number(156); //[6, 7, 11]
number(12345); //[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
