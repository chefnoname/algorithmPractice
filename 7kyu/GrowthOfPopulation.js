//In a small town the population is p0 = 1000 at the beginning of a year.

//The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.

//How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

const nbYear = (p0, percent, aug, p) => {
  let currentInhabitants = p0;
  let years = 0;

  while (currentInhabitants < p) {
    let inhabitantIncrease = currentInhabitants * (percent / 100);
    currentInhabitants += inhabitantIncrease + aug;
    years++;
  }

  return years;
};

nbYear(1500, 5, 100, 5000);
nbYear(1500000, 2.5, 10000, 2000000);
nbYear(1500000, 0.25, 1000, 2000000);
