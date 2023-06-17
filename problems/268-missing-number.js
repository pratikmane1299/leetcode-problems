function missingNumber(nums) {
  const length = nums.length;

  for (let i = 0; i <= length; i++) {
    if (nums.findIndex((no) => no === i) === -1) {
      return i;
    }
  }
}

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
