function wordPattern(pattern, s) {
	const strArr = s.split(" ");
	if (pattern.length !== strArr.length) return false;

	const map = new Map();

	for (let i = 0; i < strArr.length; i++) {
		if (map.has(pattern[i])) {
			if (map.get(pattern[i]) !== strArr[i]) {
        return false;
      }
		} else {
			for (let val of map.values()) {
				if (val === strArr[i]) return false; 
			}
		}

		map.set(pattern[i], strArr[i]);
  }

	return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));
console.log(wordPattern("aaaa", "cat cat cat cat"));
console.log(wordPattern("abba", "cat cat cat cat"));
