// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

const halvesAreAlike = (s) => {
  let vowelsMap = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };

  let firstHalfOfStr = s.slice(0, s.length / 2).toLowerCase();
  let secondHalfOfStr = s.slice(s.length / 2).toLowerCase();

  let countA = 0;
  let countB = 0;

  for (let i = 0; i < firstHalfOfStr.length; i++) {
    let currentLetterA = firstHalfOfStr[i];
    let currentLetterB = secondHalfOfStr[i];

    if (vowelsMap[currentLetterA]) {
      countA++;
    }

    if (vowelsMap[currentLetterB]) {
      countB++;
    }
  }

  return countA === countB;
};

halvesAreAlike("book"); // true
halvesAreAlike("textbook"); // false
halvesAreAlike("Uo"); // true
