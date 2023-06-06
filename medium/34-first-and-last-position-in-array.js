function searchRange(nums, target) {
  const idxs = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      idxs.push(i);
    }
  }

  return idxs.length > 0 ? [idxs[0], idxs[idxs.length - 1]] : [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
