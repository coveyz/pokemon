const question = `
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：
每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
`;
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	for (let index = 0; index < matrix.length; index++) {
		const row = matrix[index];
		if (row[0] <= target && row[row.length - 1] >= target) {
			for (let key = 0; key < row.length; key++) {
				const element = row[key];
				if (element === target) return true;
			}
		}
	}

	return false;
};

console.log(
	searchMatrix(
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

console.log(searchMatrix([[5], [6]], 6));
