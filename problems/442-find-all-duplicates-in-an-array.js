function findDuplicates(nums) {
	let map = new Map();
	let result = [];
	
	for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
			let count = map.get(nums[i]);
			map.set(nums[i], (count += 1));
		} else {
			map.set(nums[i], 1);
		}
  }

	for (const number of map.keys()) {
    if (map.get(number) === 2) result.push(number);
  }

	return result;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
