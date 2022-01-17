// You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

const restoreString = (s, indices) => {
  let positionOfLetter = [];
  let results = [];
  let sSplitToLetters = s.split("");

  for (let i = 0; i < indices.length; i++) {
    let correctIndices = indices[i];
    let currentLetter = sSplitToLetters[i];

    let arr = [correctIndices, currentLetter];

    positionOfLetter.push(arr);
  }
  let sortedWord = positionOfLetter.sort((a, b) => {
    return a[0] - b[0];
  });

  sortedWord.forEach((letter) => {
    results.push(letter[1]);
  });

  return results.join("");
};

restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]); // leetcode
restoreString("abc", [0, 1, 2]); // abc
