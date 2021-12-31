// Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

// Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word.

// If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

const isPrefixOfWord = (sentence, searchWord) => {
  let sentencesSplit = sentence.split(" ");
  let result = -1;

  sentencesSplit.forEach((word) => {
    let currentWord = word.slice(0, searchWord.length);

    if (currentWord === searchWord) {
      result = sentencesSplit.indexOf(word) + 1;
    }
  });

  return result;
};

isPrefixOfWord("i love eating burger", "burg");
isPrefixOfWord("hellohello hellohellohello", "ell");
