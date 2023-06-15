function concat(nums) {
  const arr = new Array(2 * nums.length).fill("");

  for (let i = 0; i < nums.length; i++) {
    arr[i] = nums[i];
    arr[i + nums.length] = nums[i];
  }

  return arr;
}

console.log(concat([1, 2, 1]));
console.log(concat([1, 3, 2, 1]));
