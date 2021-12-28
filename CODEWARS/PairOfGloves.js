//A pair of gloves is constituted of two gloves of the same color.

//You are given an array containing the color of each glove.

//You must return the number of pair you can constitute.

//You must not change the input array.

const numberOfPairs = (gloves) => {
  let glovesCount = {};
  gloves.forEach((glove) => {
    if (glovesCount.hasOwnProperty(glove)) {
      glovesCount[glove]++;
    } else {
      glovesCount[glove] = 1;
    }
  });

  let totalPairs = 0;
  Object.keys(glovesCount).forEach((color) => {
    let amount = glovesCount[color];
    if (amount < 2) {
      return;
    }
    let numberOfPairsInColor = Math.floor(amount / 2);
    totalPairs += numberOfPairsInColor;
  });

  return totalPairs;
};

numberOfPairs(["red", "green", "blue"]);
numberOfPairs(["red", "green", "red", "red"]);
numberOfPairs(["red"]);
numberOfPairs(["red", "red", "red", "red", "red", "red"]);
