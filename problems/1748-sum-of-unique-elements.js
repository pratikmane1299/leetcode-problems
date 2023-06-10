function sumOfUnique(nums) {
  let nosCount = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nosCount.has(nums[i])) {
      let count = nosCount.get(nums[i]);
      nosCount.set(nums[i], (count += 1));
    } else {
      nosCount.set(nums[i], 1);
    }
  }

  let sum = 0;
  for (const [key, value] of nosCount) {
    if (value === 1) sum += key;
  }

  return sum;
}

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
