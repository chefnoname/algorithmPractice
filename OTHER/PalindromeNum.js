// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

const isPalindrome = (num) => {
  return num.toString().split("").reverse().join("") === num.toString();
};

isPalindrome(323);
isPalindrome(3444);
isPalindrome(666666666);
