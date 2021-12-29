// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

const lengthOfLastWord = (str) => {
  let strToWord = str.trim().split(" ");
  return strToWord[strToWord.length - 1].length;
};

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me       to   the moon                ");
lengthOfLastWord("luffy is still joyboy");
