function lucky(arr) {
	const result = new Set();

	for (let i = 0; i < arr.length; i++) {
		let count = 0;

		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === arr[i]) count++;
		}

		if (count === arr[i]) result.add(arr[i]);
		
	}

	const nums = Array.from(result);

	if (nums.length === 0) return -1;

	return Math.max(...nums);
}

console.log(lucky([2, 2, 3, 4]));
console.log(lucky([1, 2, 2, 3, 3, 3]));
