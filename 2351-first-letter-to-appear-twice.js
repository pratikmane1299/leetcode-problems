function repeatedCharacter(s) {
  const charSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) {
      return s[i];
    } else {
      charSet.add(s[i]);
    }
  }
}

console.log(repeatedCharacter("abccbaacz"));
console.log(repeatedCharacter("abcdd"));
