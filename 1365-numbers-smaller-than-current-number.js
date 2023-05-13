function smallerNumbersThanCurrent(nums) {
	return nums.map((no) => nums.filter((n) => n < no).length);
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([7,7,7,7]));
