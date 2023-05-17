function flatten(arr, depth) {
	if (depth === 0) return arr;

	let flattenArr = [];
	
	function flat(arr, depth, currentDepth) {
		if (arr.length === 0) return;

    for (let idx = 0; idx < arr.length; idx++) {
      if (Array.isArray(arr[idx]) && currentDepth < depth) {
        currentDepth += 1;
        flat(arr[idx], depth, currentDepth);
        currentDepth -= 1;
      } else {
        flattenArr.push(arr[idx]);
      }
    }
  }

	flat(arr, depth, 0);

	return flattenArr;
}

console.log(
  flatten([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0)
);
console.log(
  flatten([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)
);
console.log(
  flatten(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ],
    2
  )
);
console.log(
  flatten(
    [
      -184,
      -884,
      [
        -279,
        [
          -524,
          [
            -881,
            20,
            -162,
            [
              -742,
              541,
              -943,
              331,
              182,
              [160, -271, -437, 768, 267, -385, -511, -828, -431, 620],
              -545,
              -503,
              -631,
              -10,
            ],
            24,
            [-35, 551, 317, -529, 562, 437, -363, -899, 740, -820],
            -562,
            [
              -298,
              689,
              33,
              361,
              -272,
              -598,
              [470, 239, 242, 490, 803, 213, -779, 442, -489, 725],
              90,
              793,
              -656,
            ],
            42,
            -252,
          ],
          -743,
          787,
          214,
          -535,
          632,
          -704,
          [
            481,
            677,
            634,
            9,
            -331,
            -64,
            -827,
            [
              712,
              -920,
              [
                -354,
                485,
                -605,
                16,
                103,
                [-637, 752, -489, -472, 724, 364, 875, -613, -764, 698],
                -133,
                557,
                386,
                -321,
              ],
              104,
              832,
              528,
              313,
              -867,
              -737,
              355,
            ],
            63,
            943,
          ],
          -389,
        ],
        -400,
        [
          692,
          -28,
          -731,
          682,
          -229,
          668,
          -563,
          [186, -834, -364, -692, 285, -554, -701, -949, 782, 319],
          -826,
          942,
        ],
        [-500, -292, -357, -177, -570, 785, -872, 22, 939, 643],
        362,
        254,
        [-671, -1, -773, -260, -783, 345, -126, -499, -661, -66],
        -485,
        72,
      ],
      762,
      939,
      35,
      -483,
      -736,
      -396,
      274,
    ],
    4
  )
);
console.log(flatten([[], [], [], []], 1000));