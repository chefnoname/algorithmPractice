// Given three integer arrays nums1, nums2, and nums3,

// return a distinct array containing all the values that are present in at least two out of the three arrays.

// You may return the values in any order.

const twoOutOfThree = (nums1, nums2, nums3) => {
  let results = [];

  nums1.filter((num) => {
    if (
      (nums2.includes(num) && !results.includes(num)) ||
      (nums3.includes(num) && !results.includes(num))
    ) {
      results.push(num);
    }
  });

  nums2.filter((num) => {
    if (
      (nums1.includes(num) && !results.includes(num)) ||
      (nums3.includes(num) && !results.includes(num))
    ) {
      results.push(num);
    }
  });

  nums3.filter((num) => {
    if (
      (nums1.includes(num) && !results.includes(num)) ||
      (nums2.includes(num) && !results.includes(num))
    ) {
      results.push(num);
    }
  });

  return results;
};

twoOutOfThree([1, 1, 3, 2], [2, 3], [3]);
twoOutOfThree([3, 1], [2, 3], [1, 2]);
