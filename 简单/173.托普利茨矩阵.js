const question = `
你一个 m x n 的矩阵 matrix 。如果这个矩阵是托普利茨矩阵，返回 true ；否则，返回 false 。
如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵 
`;

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
	for (let index = 0; index < matrix.length - 1; index++) {
		const row = matrix[index];

		for (let key = 0; key < row.length - 1; key++) {
			const col = row[key];

			if (col !== matrix[index + 1][key + 1]) {
				return false;
			}
		}
	}
	return true;
};

console.log(
	isToeplitzMatrix([
		[1, 2, 3, 4],
		[5, 1, 2, 3],
		[9, 5, 1, 2],
	])
);

console.log(
	isToeplitzMatrix([
		[1, 2],
		[2, 2],
	])
);
