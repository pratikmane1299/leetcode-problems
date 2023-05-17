function maxScore(s) {
	const scores = [];

  for (let i = 0; i < s.length - 1; i++) {
    const left = s
      .substring(0, i + 1)
      .split("")
      .reduce((acc, val) => {
        if (val === "0") acc += 1;
        return acc;
      }, 0);
    const right = s
      .substring(i + 1)
      .split("")
      .reduce((acc, val) => {
        if (val === "1") acc += 1;
        return acc;
      }, 0);

    console.log({ left, right });

    if (left !== undefined && right !== undefined) {
      scores.push(left + right);
    }
  }

	return Math.max(...scores);
}

console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));
console.log(maxScore("00"));
