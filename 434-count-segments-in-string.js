function countSegments(s) {
	return s.split(" ").filter((val) => val).length;
}

console.log(countSegments("Hello, my name is John"));
console.log(countSegments("Hello"));
console.log(countSegments(""));
console.log(countSegments("                "));
console.log(countSegments(", , , ,        a, eaefa"));
