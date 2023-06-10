function countConsistentStrings(allowed, words) {
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    let match = true;

    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (!allowed.includes(word[j])) {
        match = false;
      }
    }

    if (match) count++;
  }

  return count;
}

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])
);
