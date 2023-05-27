function areOccurrencesEqual(s) {
  const countMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (countMap.has(s[i])) {
      let count = countMap.get(s[i]);
      countMap.set(s[i], (count += 1));
    } else {
      countMap.set(s[i], 1);
    }
  }

  const values = Array.from(countMap.values());
  let equal = true;

  for (let j = 0; j < values.length - 1; j++) {
    if (values[j] !== values[j + 1]) equal = false;
  }

  return equal;
}

console.log(areOccurrencesEqual("abacbc"));
console.log(areOccurrencesEqual("aaabb"));
