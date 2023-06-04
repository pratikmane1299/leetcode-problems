function firstUniqChar(s) {
	const charCountMap = new Map();
	
	for (let i = 0; i < s.length; i++) {
		if (charCountMap.has(s[i])) {
      const count = charCountMap.get(s[i]);
      charCountMap.set(s[i], { idx: i, count: count + 1 });
    } else charCountMap.set(s[i], { idx: i, count: 1 });
	}

	for (const [no, { count, idx }] of charCountMap) {
    if (count === 1) return idx;
  }

	return -1;
}

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
