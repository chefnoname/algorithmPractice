// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

const replaceDigits = (s) => {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let currentLetter = i % 2 === 0 ? s[i] : "";

    let number = s[i + 1];

    result += changeTheLetter(currentLetter, Number(number));
  }

  return result;
};

const changeTheLetter = (letter, num) => {
  let alphabetMap = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  };

  let result = "";
  let newLetterInd = 0;

  if (letter !== "" && num >= 0) {
    Object.entries(alphabetMap).forEach((letterInMap) => {
      if (letterInMap[1] === letter) {
        newLetterInd = Number(letterInMap[0]) + num;
      }
    });

    result += letter + alphabetMap[newLetterInd];
  } else {
    result += letter;
  }
  return result;
};

replaceDigits("a1c1e1"); // 'abcdef'

replaceDigits("a1b2c3d4e"); // 'abbdcfdhe'

replaceDigits("v0g6s4d"); // 'vvgmswd'
