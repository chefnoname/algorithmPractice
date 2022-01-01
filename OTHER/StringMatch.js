// Given an array of string words. Return all strings in words which is substring of another word in any order.

// String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

const stringMatching = (words) => {
  let results = [];

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    for (let j = i + 1; j < words.length; j++) {
      let nextWord = words[j];
      let smallerWord =
        currentWord.length < nextWord.length ? currentWord : nextWord;

      if (
        nextWord.includes(smallerWord) &&
        currentWord.includes(smallerWord) &&
        !results.includes(smallerWord)
      ) {
        results.push(smallerWord);
      }
    }
  }

  return results;
};

stringMatching(["mass", "as", "hero", "superhero"]); // ['hero', 'as']

stringMatching(["leetcode", "et", "code"]); // ['et', 'code']

stringMatching(["blue", "green", "bu"]); // []

stringMatching(["jak", "yjakdn", "tj", "yyjakdn"]); // ["jak","yjakdn"]
