// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

const merge = (nums1, m, nums2, n) => {
  nums1 = nums1.filter((num) => num > 0);
  nums1 = [...nums1, ...nums2].sort();
  return nums1;
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
// [1,2,2,3,5,6]
