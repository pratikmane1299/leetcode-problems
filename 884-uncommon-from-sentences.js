const uncommonFromSentences = function(s1, s2) {
	const result = [];
	const s1Arr = s1.split(" ");
	const s2Arr = s2.split(" ");

	for (let i = 0; i < s1Arr.length; i++) {
		if (
      s1Arr.filter((s) => s === s1Arr[i]).length === 1 &&
      !s2Arr.includes(s1Arr[i])
    ) {
      result.push(s1Arr[i]);
    }
	}

	for (let i = 0; i < s2Arr.length; i++) {
		if (
      s2Arr.filter((s) => s === s2Arr[i]).length === 1 &&
      !s1Arr.includes(s2Arr[i])
    ) {
      result.push(s2Arr[i]);
    }
	}

	return result;
};

// console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
// console.log(uncommonFromSentences("apple apple", "banana"));
// console.log(uncommonFromSentences("d b zu d t", "udb zu ap"));
console.log(
  uncommonFromSentences(
    "op vu kux dn jsenj hbdez hbdez nbenh z op dxmqd op",
    "kux wnx wnx wbi jsenj nlgfn vu f vu fvxas dn op tb"
  )
);
