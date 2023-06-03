function twoOutOfThree(nums1, nums2, nums3) {
  const numberCountMap = new Map();

  nums1 = Array.from(new Set(nums1));
  nums2 = Array.from(new Set(nums2));
  nums3 = Array.from(new Set(nums3));

  for (let i = 0; i < nums1.length; i++) {
    if (numberCountMap.has(nums1[i])) {
      const count = numberCountMap.get(nums1[i]);
      numberCountMap.set(nums1[i], count + 1);
    } else {
      numberCountMap.set(nums1[i], 1);
    }
  }

  for (let i = 0; i < nums2.length; i++) {
    if (numberCountMap.has(nums2[i])) {
      const count = numberCountMap.get(nums2[i]);
      numberCountMap.set(nums2[i], count + 1);
    } else {
      numberCountMap.set(nums2[i], 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    if (numberCountMap.has(nums3[i])) {
      const count = numberCountMap.get(nums3[i]);
      numberCountMap.set(nums3[i], count + 1);
    } else {
      numberCountMap.set(nums3[i], 1);
    }
  }

  let result = [];

  for (const [key, value] of numberCountMap) {
    if (value >= 2) result.push(key);
  }

  return result; 
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
console.log(twoOutOfThree([1, 3], [2, 3], [1, 2]));
console.log(twoOutOfThree([1, 2, 2], [4, 3, 3], [5]));
