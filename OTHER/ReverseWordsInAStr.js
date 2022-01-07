// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = (s) => {
  let sentences = s.split(" ");
  let result = "";
  for (let i = 0; i < sentences.length; i++) {
    let currentWord = sentences[i];

    for (let j = currentWord.length - 1; j >= 0; j--) {
      let backwardLetter = currentWord[j];

      if (j === 0) {
        result += backwardLetter + " ";
      } else {
        result += backwardLetter;
      }
    }
  }

  return result.trim();
};

reverseWords("Let's take LeetCode contest"); // "s'teL ekat edoCteeL tsetnoc"
reverseWords("reverse the order of characters"); // 'esrever eht redro fo sretcarahc'
reverseWords("Please Hire Me"); // YOURE HIRED!
