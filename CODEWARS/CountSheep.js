//Sheep return in groups each of the days -> you will be given two arrays with these numbers (one for Friday and one for Saturday night). Entries are always positive ints, higher than zero.

//Farmer knows the total amount of sheep, this is a third parameter. You need to return the amount of sheep lost (not returned to the farm) after final sheep counting on Saturday.

const lostSheep = (friday, saturday, total) => {
  const fridayTotal = friday.length > 0 ? friday.reduce((a, b) => a + b) : 0;
  const saturdayTotal =
    saturday.length > 0 ? saturday.reduce((a, b) => a + b) : 0;

  return total - (fridayTotal + saturdayTotal);
};

lostSheep([3, 1, 2], [4, 5], 21);
lostSheep([11, 23, 3, 4, 15], [7, 14, 9, 21, 15], 300);
