// A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

// For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
// You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

const truncateSentence = (s, k) => {
  let sentence = s.split(" ").slice(0, k).join(" ");

  return sentence;
};

truncateSentence("Hello how are you Contestant", 4);
truncateSentence("What is the solution to this problem", 4);
truncateSentence("chopper is not a tanuki", 5);
