function minimumIndexSum(list1, list2) {
	const stringIdxMap = new Map();

	const maxLength = Math.max(list1.length, list2.length);

	for (let i = 0; i < maxLength; i++) {
		if (list1[i]) {
      if (list2.includes(list1[i])) {
        if (!stringIdxMap.has(list1[i])) {
          stringIdxMap.set(list1[i], [null, i]);
        } else {
          const [j, _] = stringIdxMap.get(list1[i]);
          stringIdxMap.set(list1[i], [j, i]);
        }
      }
    }

		if (list2[i]) {
			if (list1.includes(list2[i])) {
				if (!stringIdxMap.has(list2[i])) {
          stringIdxMap.set(list2[i], [i, null]);
        } else {
          const [_, j] = stringIdxMap.get(list2[i]);
          stringIdxMap.set(list2[i], [i, j]);
        }
			}
		}
	}

	const stringSumMap = new Map();

	if (Array.from(stringIdxMap.keys()).length === 1)
    return [...stringIdxMap.keys()];
	
	for (const [key, [i, j]] of stringIdxMap) {
		stringSumMap.set(key, i + j);
  }

	const minSum = Math.min(...stringSumMap.values());

	const commonStrings = [];

	for (const [key, sum] of stringSumMap) {
		if (sum === minSum) commonStrings.push(key);
  }

	return commonStrings;
}

console.log(
  minimumIndexSum(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun",
    ]
  )
);
console.log(
  minimumIndexSum(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
);
