//A pangram is a sentence that contains every single letter of the alphabet at least once.

//For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const isPangram = (str) => {
  const alphabetMap = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };

  const strArr = str.toLowerCase().split("");

  strArr.forEach((letter) => {
    if (alphabetMap.hasOwnProperty(letter)) {
      alphabetMap[letter] = true;
    }
  });

  return Object.keys(alphabetMap).every(
    (letter) => alphabetMap[letter] === true
  );
};

isPangram("lol");
isPangram("The quick brown fox jumps over the lazy dog.");
