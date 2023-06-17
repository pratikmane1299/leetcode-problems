function singleNumber(nums) {
  if (nums.length === 1) return nums[0];

  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else map.set(nums[i], 1);
  }

  for (const [no, count] of map) {
    if (count === 1) {
      return no;
    }
  }
}

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
