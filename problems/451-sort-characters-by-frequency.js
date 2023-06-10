function frequencySort(s) {
  let countMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (countMap.has(s[i])) {
      countMap.set(s[i], countMap.get(s[i]) + 1);
    } else {
      countMap.set(s[i], 1);
    }
  }

  const queue = [];
	
	for (const [key, value] of countMap) {
		let added = false;
		for (let i = 0; i < queue.length; i++) {
      if (value > queue[i].priority) {
				queue.splice(i, 0, { key, priority: value });
				added = true;
				break;
			}
    }

		if (!added) queue.push({ key, priority: value });
	}

	return queue.length > 0
    ? queue.map((val) => val.key.repeat(val.priority)).join("")
    : s[0];
}

console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));
