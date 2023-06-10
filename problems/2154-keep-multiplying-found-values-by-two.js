function findFinalValue(nums, original) {
	let iterate = true;
	while (iterate) {
    const index = nums.findIndex((no) => no === original);
		if (index === -1) {
			iterate = false;
		} else {
			original = nums[index] * 2;
		}
  }

  return original;
}

console.log(findFinalValue([5, 3, 6, 1, 12], 3));
console.log(findFinalValue([2, 7, 9], 4));
console.log(findFinalValue([8, 19, 4, 2, 15, 3], 2));
