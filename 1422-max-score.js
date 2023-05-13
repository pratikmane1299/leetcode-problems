function maxScore(s) {
  let sumArr = 0;

	function calcuateSum(arr) {
		return arr.reduce((acc, val) => (acc += +val), 0);
	}

  for (let i = 0; i < s.length; i++) {
		sumArr +=
      (calcuateSum(s.substring(i).split("")),
      calcuateSum(s.substring(i + 1).split("")));
  }

	console.log("sumArr - ", sumArr);
}

console.log(maxScore("011101"));
