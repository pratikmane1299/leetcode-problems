function merge(nums1, m, nums2, n) {
  return [...nums1.filter((num) => num !== 0), ...nums2].sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([], 0, [1], 1));
