function isIsomorphic(s, t) {
	if (s.length !== t.length) return false;

	const map = new Map();

	for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
			if (map.get(s[i]) !== t[i]) return false;
		} else {
			for (const z of map.values()) {
				if (z === t[i]) return false;
			}
		}
		map.set(s[i], t[i]);
  }


	return true;
}

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("pqr", "abb"));
