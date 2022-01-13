// Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

// The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.

const generateTheString = (n) => {
  let firstLettersMap = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
  };

  let secondLettersMap = {
    0: "z",
    1: "g",
    2: "h",
    3: "i",
    4: "j",
  };

  let str = "";

  let splitNumToOdd = n % 2 === 0 ? [n - 1, n - (n - 1)] : [n];

  let firstRandomLetter = firstLettersMap[Math.floor(Math.random() * 5)];

  let secondRandomLetter = secondLettersMap[Math.floor(Math.random() * 5)];

  while (splitNumToOdd[0] > 0) {
    str += firstRandomLetter;
    splitNumToOdd[0]--;
  }

  if (splitNumToOdd[1]) {
    while (splitNumToOdd[1] > 0) {
      str += secondRandomLetter;
      splitNumToOdd[1]--;
    }
  }

  return str;
};

generateTheString(6);
generateTheString(72);
generateTheString(11);
