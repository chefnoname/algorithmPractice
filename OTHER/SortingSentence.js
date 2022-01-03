// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

// A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

// For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
// Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

const sortSentence = (s) => {
  let sentenceSplit = s.split(" ");

  let newSentence = sentenceSplit
    .sort((a, b) => a.substr(-1) - b.substr(-1))
    .map((word) => word.slice(0, word.length - 1))
    .join(" ");

  return newSentence;
};

sortSentence("is2 sentence4 This1 a3"); // This is a sentence
sortSentence("Myself2 Me1 I4 and3"); // Me Myself and I
