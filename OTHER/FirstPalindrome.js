// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.

const firstPalindrome = (words) => {
  let word = "";

  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];

    let currentReversedWord = currentWord.split("").reverse().join("");

    if (currentWord === currentReversedWord) {
      return (word += currentWord);
    }
  }

  return word;
};

firstPalindrome(["abc", "car", "ada", "racecar", "cool"]); // 'ada
firstPalindrome(["notapalindrome", "racecar"]); // 'racecar'
firstPalindrome(["def", "ghi"]); // ''
