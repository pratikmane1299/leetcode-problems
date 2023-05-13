function chunk(arr, size) {
	const chunks = [];
	for (let idx = 0; idx < arr.length; idx += size) {
		chunks.push(arr.slice(idx, idx + size));
	}

	return chunks;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
console.log(chunk([1,9,6,3,2], 3));
console.log(chunk([8,5,3,2,6], 6));
console.log(chunk([], 1));
