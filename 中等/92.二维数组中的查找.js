const question = `
在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
`;

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	for (let index = 0; index < matrix.length; index++) {
		const row = matrix[index];

		for (let key = 0; key < row.length; key++) {
			const col = row[key];
			if (col === target) {
				return true;
			} else if (col > target) {
				break;
			}
		}
	}

	return false;
};

console.log(
	findNumberIn2DArray(
		[
			[1, 4, 7, 11, 15],
			[2, 5, 8, 12, 19],
			[3, 6, 9, 16, 22],
			[10, 13, 14, 17, 24],
			[18, 21, 23, 26, 30],
		],
		5
	)
);
console.log(
	findNumberIn2DArray(
		[
			[1, 4, 7, 11, 15],
			[2, 5, 8, 12, 19],
			[3, 6, 9, 16, 22],
			[10, 13, 14, 17, 24],
			[18, 21, 23, 26, 30],
		],
		20
	)
);
