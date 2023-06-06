function search(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
  }

  return -1;
}

console.log([4, 5, 6, 7, 0, 1, 2], 0);
console.log([4, 5, 6, 7, 0, 1, 2], 3);
console.log([1], 0);
