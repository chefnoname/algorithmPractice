// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

const countConsistentStrings = (allowed, words) => {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    count = isItIncluded(currentWord, count, allowed);
  }

  return count;
};

const isItIncluded = (word, count, allowed) => {
  let counter = 0;
  for (let i = 0; i < word.length; i++) {
    let currentLetter = word[i];
    if (allowed.includes(currentLetter)) {
      counter++;
    }
  }

  if (counter === word.length) {
    count++;
  }

  return count;
};

countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]); // 2

countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]); // 7
