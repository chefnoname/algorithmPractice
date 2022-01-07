// Given a string s, return true if s is a good string, or false otherwise.

// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

const areOccurrencesEqual = (s) => {
  let lettersMap = {};

  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];

    if (lettersMap[currentLetter]) {
      lettersMap[currentLetter]++;
    } else lettersMap[currentLetter] = 1;
  }

  let occurrenceOfEachLetter = Object.values(lettersMap);

  return occurrenceOfEachLetter.every(
    (occurrence) => occurrence === occurrenceOfEachLetter[0]
  );
};

areOccurrencesEqual("abacbc"); // true
areOccurrencesEqual("aaabb"); //false
