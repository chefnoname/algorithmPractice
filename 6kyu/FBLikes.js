//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items.

//We want to create the text that should be displayed next to such an item.

//Implement the function which takes an array containing the names of people that like an item.

//It must return the display text as shown in the examples:

const likes = (names) => {
  let str = "";

  switch (names.length) {
    case 0:
      str = "no one likes this";
      break;
    case 1:
      str = `${names[0]} likes this`;
      break;
    case 2:
      str = `${names[0]} and ${names[1]} like this`;
      break;
    case 3:
      str = `${names[0]}, ${names[1]} and ${names[2]} like this`;
      break;
    default:
      str = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }

  return str;
};

likes(["Alex", "Jacob", "Mark", "Max"]);
likes(["Max", "John", "Mark"]);
likes(["Jacob", "Alex"]);
likes(["Peter"]);
likes([]);
