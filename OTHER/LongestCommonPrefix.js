// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (arr) => {
  let result = "";

  for (let i = 0; i < arr[0].length; i++) {
    let currentLetter = arr[0][i];
    let lettersAtIndSame = arr.every((word) => word[i] === currentLetter);
    if (!lettersAtIndSame) {
      break;
    }
    result += currentLetter;
  }

  return result;
};

longestCommonPrefix(["flower", "flow", "flight"]); // fl

longestCommonPrefix(["cir", "car"]);
