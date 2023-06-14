function canBeTypedWords(text, brokenLetters) {
  let count = 0;
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    let found = false;

    for (let j = 0; j < brokenLetters.length; j++) {
      console.log(
        "brokenLetters[j] - ",
        brokenLetters[j],
        " - text[i] - ",
        text[i]
      );
      if (text[i].indexOf(brokenLetters[j]) !== -1) {
        found = true;
        break;
      }
    }

    if (!found) count++;
  }

  return count;
}

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
