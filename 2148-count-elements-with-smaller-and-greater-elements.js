function countElements(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (
      nums.find((no) => no < nums[i]) !== undefined &&
      nums.find((no) => no > nums[i]) !== undefined
    ) {
      count++;
    }
  }

  return count;
}

console.log(countElements([11, 7, 2, 15]));
console.log(countElements([-3, 3, 3, 90]));
console.log(countElements([-100000, -100000, -1, 0, 1, 100000, 100000]));
