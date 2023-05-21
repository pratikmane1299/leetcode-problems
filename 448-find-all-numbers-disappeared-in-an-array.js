function findDisappearedNumbers(nums) {
	const notFoundNos = [];
	for (let i = 1; i <= nums.length; i++) {
		if (nums.findIndex((num) => num === i) === -1) {
			notFoundNos.push(i);
		}
	}

	return notFoundNos;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
