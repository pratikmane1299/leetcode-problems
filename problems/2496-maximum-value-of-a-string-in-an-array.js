function maximumValue(strs) {
	let lengths = [];

	for (const str of strs) {
		if (!isNaN(str)) lengths.push(Number(str));
		else lengths.push(str.length);
	}

	return Math.max(...lengths);
}

console.log(maximumValue(["alic3", "bob", "3", "4", "00000"]));
console.log(maximumValue(["1", "01", "001", "0001"]));
