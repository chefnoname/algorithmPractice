// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  return haystack.indexOf(needle);
};

strStr("hello", "ll");
strStr("aaaaa", "bba");
strStr("", "");
