function detectCapitalUse(word) {
	if (
    /^[A-Z]+$/g.test(word) ||
    /^[a-z]+$/g.test(word) ||
    /^[A-Z][a-z]+$/g.test(word)
  ) {
    return true;
  }
	return false;
}

console.log(detectCapitalUse('USA'));
console.log(detectCapitalUse('Leetcode'));
console.log(detectCapitalUse('FlaG'));
