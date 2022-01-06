// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

// Return the number of rectangles that can make a square with a side length of maxLen.

const countGoodRectangles = (rectangles) => {
  let lengthOfRectangles = [];
  let largestPossibleSquare = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let currentRect = rectangles[i];
    let length =
      currentRect[0] < currentRect[1] ? currentRect[0] : currentRect[1];
    lengthOfRectangles.push(length);
  }

  for (let i = 0; i < lengthOfRectangles.length; i++) {
    let currentLength = lengthOfRectangles[i];

    for (let j = i + 1; j < lengthOfRectangles.length; j++) {
      let nextLength = lengthOfRectangles[j];

      if (currentLength === nextLength) {
        largestPossibleSquare++;
      }
    }
  }

  return largestPossibleSquare;
};

countGoodRectangles([
  [5, 8],
  [3, 9],
  [5, 12],
  [16, 5],
]); // 3

countGoodRectangles([
  [2, 3],
  [3, 7],
  [4, 3],
  [3, 7],
]); // 1

countGoodRectangles([
  [5, 8],
  [3, 9],
  [3, 12],
]); // 1
