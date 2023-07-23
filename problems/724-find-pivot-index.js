function sum(arr) {
  return arr.reduce((sum, val, idx) => (sum += val), 0);
}

function pivotIndex(nums) {
  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i + 1);
    const right = nums.slice(i + 1);
    if (sum(left) === sum(right)) {
      return i;
    }
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
