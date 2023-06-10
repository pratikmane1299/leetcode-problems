function capitalizeTitle(title) {
  const splitArr = title.split(" ");
  const result = [];

  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].length <= 2) {
      result.push(splitArr[i].toLowerCase());
    } else {
      result.push(
        `${splitArr[i][0].toUpperCase()}${splitArr[i]
          .substring(1)
          .toLowerCase()}`
      );
    }
  }

  return result.join(" ");
}

console.log(capitalizeTitle('capiTalIze tHe titLe'));
console.log(capitalizeTitle('First leTTeR of EACH Word'));
console.log(capitalizeTitle("i lOve leetcode"));
