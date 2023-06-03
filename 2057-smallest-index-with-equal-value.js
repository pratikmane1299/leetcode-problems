function smallestEqual(nums) {
	const idxArr = [];

	for (let i = 0; i < nums.length; i++) {
		if (i % 10 === nums[i]) idxArr.push(i);
	}

	return idxArr.length !== 0 ? Math.min(...idxArr) : -1; 
}

console.log(smallestEqual([0, 1, 2]));
console.log(smallestEqual([4, 3, 2, 1]));
console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
