// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

const numJewelsInStones = (jewels, stones) => {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    let currentLetter = stones[i];

    count = isItAJewel(jewels, currentLetter, count);
  }

  return count;
};

const isItAJewel = (jewels, letter, count) => {
  for (let i = 0; i < jewels.length; i++) {
    let currentLetter = jewels[i];

    if (currentLetter === letter) {
      count++;
    }
  }

  return count;
};

numJewelsInStones("aA", "aAAbbbb"); // 3
numJewelsInStones("z", "ZZ"); // 0
