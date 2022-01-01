// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".

const reversePrefix = (word, ch) => {
  let slicedWordRevPrefix = word
    .split("")
    .slice(0, word.indexOf(ch) + 1)
    .reverse()
    .join("");

  let secondHalfOfWord = word.slice(word.indexOf(ch) + 1);

  let result = slicedWordRevPrefix + secondHalfOfWord;

  return result !== "" ? result : word;
};

reversePrefix("abcdefg", "d"); // 'dcbaefd'
reversePrefix("xyxzxe", "z"); // 'zxyxxe'
reversePrefix("abcd", "z");
