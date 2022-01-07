// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence

const mostWordsFound = (sentences) => {
  let results = [];

  for (let i = 0; i < sentences.length; i++) {
    let currentSentence = sentences[i];

    results.push(currentSentence.split(" ").length);
  }

  return results.reduce((a, b) => (a > b ? a : b));
};

mostWordsFound([
  "alice and bob love leetcode",
  "i think so too",
  "this is great thanks very much",
]);

mostWordsFound([
  "please wait",
  "continue to fight",
  "continue to win",
  "continue continue",
]);
