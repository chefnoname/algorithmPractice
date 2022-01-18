// Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

// A string is represented by an array if the array elements concatenated in order forms the string.

const arrayStringsAreEqual = (word1, word2) => {
  let joinedWord1 = word1.join("");
  let joinedWord2 = word2.join("");

  return joinedWord1 === joinedWord2;
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"]); // true

arrayStringsAreEqual(["a", "cb"], ["ab", "c"]); // false
