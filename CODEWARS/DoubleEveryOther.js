//Write a function that doubles every second integer in a list, starting from the left.

const doubleEveryOther = (n) => {
  return n.length % 2 === 0
    ? n
        .reverse()
        .map((num, i) => {
          return i % 2 === 0 ? n[i] * 2 : num;
        })
        .reverse()
    : n.map((num, i) => {
        return i % 2 !== 0 ? n[i] * 2 : num;
      });
};

doubleEveryOther([1, 2, 3, 4]);
doubleEveryOther([1, 19, 6, 2, 12, -3]);
doubleEveryOther([-1000, 1653, 210, 0, 1]);
doubleEveryOther([3, -1, -3]);
