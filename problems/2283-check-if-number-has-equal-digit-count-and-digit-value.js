function digitCount(num) {
  const arr = num.split("");
  for (let i = 0; i < num.length; i++) {
		const count = arr.filter((val) => Number(val) === i).length;
    if (count !== Number(num[i])) return false;
  }

  return true;
}

console.log(digitCount("1210"));
console.log(digitCount("030"));
