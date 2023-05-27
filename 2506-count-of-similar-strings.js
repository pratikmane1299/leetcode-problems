function similarStirngs(words) {
	let count = 0;

  for (let i = 0; i < words.length; i++) {
		const firstword = new Set(words[i].split(""));

		for (let j = i + 1; j < words.length; j++) {
			const secondword = new Set(words[j].split(""));

			let contains = true;
			for (const key of firstword) {
				if (!secondword.has(key)) {
					contains = false;
					break;
				}
      }

			if (firstword.size === secondword.size && contains) count++;
		}
  }

	return count;
}

// console.log(similarStirngs(["aba", "aabb", "abcd", "bac", "aabc"]));
console.log(similarStirngs(["aabb", "ab", "ba"]));
// console.log(similarStirngs(["nba","cba","dba"]));
