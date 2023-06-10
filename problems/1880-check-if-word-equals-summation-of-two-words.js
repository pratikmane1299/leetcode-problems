function isSumEqual(firstWord, secondWord, targetWord) {
	const alphabets = "abcdefghijklmnopqrstuvwxyz";

	let firstWordValue = "",
    secondWordValue = "",
    targetWordValue = "";

	for (let i = 0; i < firstWord.length; i++) {
    firstWordValue += alphabets.indexOf(firstWord[i]);
  }

	for (let i = 0; i < secondWord.length; i++) {
    secondWordValue += alphabets.indexOf(secondWord[i]);
  }

	for (let i = 0; i < targetWord.length; i++) {
    targetWordValue += alphabets.indexOf(targetWord[i]);
  }

	return (
    Number(targetWordValue) === Number(firstWordValue) + Number(secondWordValue)
  );
}

console.log(isSumEqual("acb", "cba", "cdb"));
console.log(isSumEqual("aaa", "a", "aab"));
console.log(isSumEqual("aaa", "a", "aaaa"));
