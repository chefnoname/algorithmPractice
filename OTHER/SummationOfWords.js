// The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

// The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

// For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
// You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

// Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

const isSumEqual = (firstWord, secondWord, targetWord) => {
  const letterMap = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  let firstWordValue = Number(
    firstWord
      .split("")
      .map((letter) => letterMap[letter])
      .join("")
  );

  let secondWordValue = Number(
    secondWord
      .split("")
      .map((letter) => letterMap[letter])
      .join("")
  );

  let targetWordValue = Number(
    targetWord
      .split("")
      .map((letter) => letterMap[letter])
      .join("")
  );

  return firstWordValue + secondWordValue === targetWordValue;
};

isSumEqual("acb", "cba", "cdb"); // true
isSumEqual("aaa", "a", "aaa");
