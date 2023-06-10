function mostWordsFound(sentences) {
  let maxWords = 0;

  for (let i = 0; i < sentences.length; i++) {
    const length = sentences[i].split(" ").length;
    if (length > maxWords) {
      maxWords = length;
    }
  }

  return maxWords;
}

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
